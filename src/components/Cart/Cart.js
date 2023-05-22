import './Cart.css'
import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(CartContext)
    if(cart.length === 0) {
        return (
            <div className='contenedorComprasVacio'>
                <div className='color'>  
                    <h1>No hay productos en el carrito</h1>
                    <Link to='/productos'><button className='Link'>Buscar otros productos...</button></Link>
                </div>
            </div>
        )
    }
    return (
        <div className='contenedorCompras'>
            
            <h1 className='color'>Carrito de compras</h1>
            
            <div className='padreCarrito'>
                {cart.map(prod => 
                <div className="productosCarrito" key={prod.id}> 
                    <p className='titulo'>{prod.name}</p>
                    <div>Cantidad: {prod.quantity}</div> 
                    <div>Precio uni: {prod.price}</div> 
                    <div>Subtotal: {prod.quantity * prod.price}</div>
                    <div>
                        <button className='botonEliminarProducto' onClick={() => removeItem(prod.id)}>Quitar producto</button>
                    </div>
                </div>)
                }   
            </div>
            <div className='flex'>  
                <p className='montoTotal'>El monto total es de: {getTotal()}$</p>
            </div>
            
            <div className='margin'>
                <button onClick={clearCart} className='botonVaciar'>Vaciar carrito</button>
                <Link to='/checkout'>
                    <button  className='botonComprar'>Terminar compra</button>
                </Link>
            </div>
        </div>
    )
}
export default Cart