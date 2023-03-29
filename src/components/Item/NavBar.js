import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <nav>
        <h3>Infinito Creditos</h3>
        <div>
            <button>Autos</button>
            <button>Motos</button>
            <button>Camiones</button>
            <button>Camionetas</button>
        </div>
        <CartWidget/>
        </nav>
  )
}
