import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({productos}) =>{
    return(
        <div className="prueba">
            {productos.map(producs => <Item key={producs.id}{...producs} />)}
        </div>
    )   
}
export default ItemList