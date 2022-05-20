import React, { useEffect, useState } from 'react'
import style from './cssModules/itemDetailContainer.module.css'
import ItemDetail from './ItemDetail'
import iniciales from '../data/pokedata'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {

    const {name} = useParams()
    
    const [item, setItem] = useState([])

    const GetItems =  (items) => {

        new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(items.find((item) => item.name.toLowerCase() === name.toLowerCase()))
            },2000)
        })
        .then(response =>
            setItem(response))
}

    useEffect(() => {
        GetItems(iniciales)
    },[item])

    return (
        <div className={style.loading}>

            {item.length !== 0 ? 
        
                <ItemDetail 
                    name={item.name.toUpperCase()}
                    id={ "#00" + item.id}
                    type={item.type}
                    image = {item.image} 
                    descripcion={item.description}
                    precio={item.price}/>
                
        : <h1 className={style.title}>Cargando...</h1>
        }

        </div>
    )
}

export default ItemDetailContainer;

// <>