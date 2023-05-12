import React, {
    createContext, useState

} from 'react'

export const CartContext = createContext({
    cart: []
})


export const CartProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
            setTotalQuantity(prev => prev = quantity)
            setTotal(prev => prev + item.price * quantity)
        } else {
            console.error('El producto ya fue agregado')
        }
    }


    const removeItem = (itemId) => {
        const cartUpdated = cart.find(prod => prod.id !== itemId)
        setCart(prev => prev.find(prod => prod.id !== itemId))
        setTotalQuantity(prev => prev - cartUpdated.quantity)
        setTotal(prev => prev - cartUpdated.price * cartUpdated.quantity)
    }
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
        setTotal(0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}


