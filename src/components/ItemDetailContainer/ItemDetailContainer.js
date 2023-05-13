
import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    const docRef = doc(db, 'Item', itemId)
    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productsAdapted = { id: response.id, ...data }
        console.log(productsAdapted)
        setProduct(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])

  return (
    <div className="ItemDetailContainer">
      {loading ? <p>Cargando información del producto...</p> : <ItemDetail {...product} />}
    </div>
  )

}

export default ItemDetailContainer