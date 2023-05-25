import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(()=>{
        setLoading(true)
        const collectionRef = categoryId
        ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
        : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc=> {
                return {id: doc.id, ...doc.data()}
            })
            setProductos(products)
        }).finally(() => {
            setLoading(false)
        })
        
    }, [categoryId])

    if(loading) {
        return(
            <img src="https://cdn.dribbble.com/users/108183/screenshots/14420202/media/0398828bd84d67fad129e64e8a79f77c.gif" className="loadImg" alt="cargando"/> 
        )
    }
    return(
        <div className='ContenedorProductos'>
            <div className='marginAuto'>
                <div className='flex'>  
                    <h1 className='textColor'>Nuestra selección de productos</h1>
                </div>
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}
export default ItemListContainer