import React from 'react'
import cartwidget from './assets/cartwidget.png'
import './CartWidget.css'


export const CartWidget = () => {
  return (
    <div>
        <img src={cartwidget} alt='cart-widget' className='Cart'/>

    </div>
  )
}


export default CartWidget
