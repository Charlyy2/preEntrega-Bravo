/*import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
 // const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
 //   setLoading(true)

//console.log(loading)
    const collectionRef= categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    getDocs(collectionRef)
    .then(response => {
      const productsAdapted = response.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProducts(productsAdapted)
    })
    .catch(error=>{
      console.log(error)
    })
    .finally(()=>{
     // setLoading(false)
    })
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })

  }, [categoryId])

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>

  )
}


export default ItemListContainer; */

import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db  } from "../../services/firebase/firebaseConfig";

export const ItemListContainer = ({ greeting }) => {
    const [items, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(()=> {
        setLoading(true)
        const collectionRef = itemId 
        
        ? query(collection(db, 'Item'), where ('id', '==', itemId)) 
        : collection(db, 'Item')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()
                return {id: doc.id, ...data} 
            })
            console.log(productsAdapted)
            setProducts(productsAdapted)
        })

        .catch(error => {
            console.error(error)
        })
        .finally(() =>{
            setLoading(false)
        })
    
    }, [itemId]);


    return (
      <div className="">
        <div>
          <h1 className="titulo bounce-in-bck">{greeting}</h1>
        </div>
        {loading ? (
          <div className="Loading">Cargando productos...</div>
        ) : (
          <div className="ItemListContainer">
            <ItemList products={items} />
          </div>
        )}
      </div>
    );
  };
  
  export default ItemListContainer;