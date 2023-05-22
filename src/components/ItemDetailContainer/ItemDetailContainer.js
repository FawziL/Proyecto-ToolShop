import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'
import './ItemDetailContainer.css'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    const { productId } = useParams()
    useEffect(() => {
        setLoading(true)
        getDoc(doc(firestoreDb, 'products', productId)).then(response =>{
            const product = {id: response.id, ...response.data()}
            setProduct(product)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return(
            <img src="https://cdn.dribbble.com/users/108183/screenshots/14420202/media/0398828bd84d67fad129e64e8a79f77c.gif" className="loadImg" alt="cargando"/> 
        )
    }
    return(
        <div className='tamaño'>
            <div className='DetailsProductos'>
                <ItemDetail  {...product} /> 
            </div>
        </div> 
    )
}
export default ItemDetailContainer