import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

export const ItemDetail = ({id, name, img, category, description, price, stock}) => {
  return (
    <article className='CardItem'>
    <header className='Header'>
        <h2 className='ItemHeader'>
            {name}
        </h2>
    </header>
    <picture>
        <img src={img} alt={name} className="ItemImg" />
    </picture>
    <section>
        <p className='Info'>
            Precio: ${price}
        </p>
        <p className='Info'>
            Descripcion: {description}
        </p>
        <p className='Info'>
            Stock disponible: {stock}
        </p>
    </section>
    <footer className='ItemFooter'>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agredada ", quantity)}/>
    </footer>
</article>
  )
}

export default ItemDetail
