import './App.css';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App imagenFondo">
    <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Form/>}/>
              <Route path='/aboutUs' element={<Contact/>}/>
              <Route path='*' element={<h1>NOT FOUND</h1>}/>
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
