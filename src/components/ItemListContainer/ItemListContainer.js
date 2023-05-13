
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
          <h1 className="">{greeting}</h1>
        </div>
        {loading ? (
          <div className="">Cargando productos...</div>
        ) : (
          <div className="ItemListContainer">
            <ItemList products={items} />
          </div>
        )}
      </div>
    );
  };
  
  export default ItemListContainer;