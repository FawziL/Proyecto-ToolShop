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
    <nav class="navbar navbar-dark navbar-expand-lg navIndex">
        <NavLink to='/'>
            <p className="logo">AirT-ToolShop</p>
        </NavLink>
        
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>

        <ul class="navbar-nav justify-content-around collapse navbar-collapse" id="navbarNav">
            <li class="nav-item">
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
            </li>
            <li class="nav-item">
                <NavLink to='/aboutUs' className={({ isActive }) => (isActive ? 'navRojo' : 'navVerde')}>Contacto</NavLink>
            </li>
            <li class="nav-item">
                <CartWidget />
            </li>
        </ul>
    </nav>
    )
    
    
    
}


export default NavBar;

