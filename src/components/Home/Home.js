import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='Home'>
            <div className='color'>
                <h1>¡Somos una tienda de repuestos de automóviles!</h1>
                <h2>¡Te invitamos a que consultes nuestro catálogo!</h2>
                <Link to='/productos'><button className='linkProductos'>Consultar productos...</button></Link>
            </div>
        </div>
    )
}

export default Home