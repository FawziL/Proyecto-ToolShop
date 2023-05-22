import { createContext, useState } from "react";

    const CartContext = createContext()

    export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productoToAdd) => {
        setCart([...cart, productoToAdd])
    }
    const removeItem = (id) => {
        const products = cart.filter(prod=> prod.id !== id)
        setCart(products)
    }
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }
    const clearCart = () => {
        setCart([])
    }
    const getQuantity = () =>{
        let count = 0
        cart.forEach(prod =>{
            count += prod.quantity
        })
        return count
    }
    const getTotal = () =>{
        let count = 0
        cart.forEach(prod=>{
            count += prod.quantity * prod.price
        })
        return count
    }

    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, removeItem, clearCart, isInCart, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext