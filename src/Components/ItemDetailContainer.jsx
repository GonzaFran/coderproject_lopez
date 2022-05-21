import React, { useEffect, useState } from 'react'
import style from './cssModules/itemDetailContainer.module.css'
import ItemDetail from './ItemDetail'
import iniciales from '../data/pokedata'
import { useParams } from 'react-router'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const {name} = useParams()
    
    const [item, setItem] = useState([])

    useEffect(() => {
      getPokemon()
    }, [])
    
    const getPokemon = () => {
        const pokedata = getFirestore()
        const poke = doc(pokedata,'kanto',name.toLowerCase())
        getDoc(poke).then(response => {
            if(response.exists) {
                setItem(response.data())
            }
        })
    }

    return (
        <div className={style.loading}>

            {item.length !== 0 ? 
        
                <ItemDetail 
                    name={item.name.toUpperCase()}
                    id={ "#" + item.id}
                    type={item.type}
                    image = {item.id} 
                    descripcion={item.description}
                    precio={item.price}/>
                
        : <h1 className={style.title}>Cargando...</h1>
        }

        </div>
    )
}

export default ItemDetailContainer;

// <>