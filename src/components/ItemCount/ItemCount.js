import React, { useState } from 'react'
import './ItemCount.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const ItemCount = ({ stock, product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext)

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity()
    }
  }
  return (

    <div className='Counter'>
      <div className='Controls'>
        <button className='Button' onClick={decrement}>-</button>
        <h4 className='Number'>{quantity}</h4>
        <button className='Button' onClick={increment}>+</button>
      </div>
      <div>
        <button className='Button' onClick={handleAddToCart} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount