import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        getDocs(collection(firestoreDb, 'category')).then(response =>{
          const category = response.docs.map(doc => {
              return {id: doc.id, ...doc.data()}
          })  
          setCategories(category)
        })
    }, [])

    return(
        <nav className="NavBar">
            <NavLink to='/'>
                <p className="logo">AirT-ToolShop</p>
            </NavLink>
            <ul className="componentes-NavBar">
                <li id="elements-NavBar">
                    <NavLink to="/productos" className={({ isActive }) => (isActive ? 'navRojo' : 'navVerde')}>
                        Productos
                    </NavLink>
                    <ul className="menu-vertical">
                    {categories.map((cat) => (
                    <NavLink
                        key={cat.id}
                        to={`/productos/${cat.id}`}
                        className={({ isActive }) =>
                            isActive ? 'navRojoDos' : 'navVerdeDos'}>
                        {cat.description}
                    </NavLink>
                    ))}
                    </ul>
                </li>
            </ul>
            <NavLink to='/aboutUs' className={({ isActive }) => (isActive ? 'navRojo' : 'navVerde')}>
               Contacto
            </NavLink>
            <div className='cartWidget'>
                <CartWidget />
            </div>
        </nav>
    )
}


export default NavBar