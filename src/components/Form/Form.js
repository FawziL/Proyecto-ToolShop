import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import './Form.css'


const Form = () =>{

    const { cart, getTotal, clearCart} = useContext(CartContext)  

    const createOrder = () => {
        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let confirmacion = document.getElementById('confirmacion');

        function desaparecer(){
            confirmacion.innerText= ""
        }

        const objOrder = {
            items: cart,
            buyer: {
                name: nombre,
                phone: phone,
                email: email,
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')
        
        const outOfStock = []
        if (nombre === "" || email === "" || phone === ""){
            confirmacion.innerText = "Por favor, completa el formulario de datos"
        } else if(cart.length === 0){
            confirmacion.innerText = "Tu carrito esta vacío. Por favor, agrega productos antes de intentar pagar"
        } else{ 
        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                confirmacion.innerText=
                (`Su orden ha sido procesada! 
                El id de su orden es "${id}"`)
                clearCart();
            }).catch(error => {
                console.log(error)
            })}
            setTimeout(desaparecer,3000);
    }

    return(
        <div className='ContenedorProductos'>
            <div className='marginAuto'>
            <div className='flex'>  
                <h1 className='textColor'>Coloca tus datos de contacto y pago</h1>
                <div id='confirmacion'></div>
            </div>
            <div className='form'>


                <div className="form-group">
                    <label htmlFor="Nombre">Nombre y Apellido:</label>
                    <input
                        type="text"
                        id='nombre'
                        required
                        placeholder="Nombre"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="Nombre">Correo electrónico:</label>
                    <input
                        type='email' 
                        id='email'
                        required
                        placeholder="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="Nombre">Número telefónico:</label>
                    <input
                        type='tel' 
                        id='phone' 
                        placeholder='Número telefónico:'
                        required
                    />
                </div>

                <button onClick={() => createOrder()} className='botonComprar'>
                    Generar Orden
                </button>
            </div>     
        </div>
        </div>
    )
}
export default Form