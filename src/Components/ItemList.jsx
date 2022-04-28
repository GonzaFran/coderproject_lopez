import {useState,useEffect} from 'react'
import iniciales from '../data/pokedata.js'
import Item from './Item.jsx';
import style from './cssModules/listItem.module.css'

const ItemList = () => {
    const [pokemon,setPokemon] = useState([])

    useEffect(() => {
        const getPokemons = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(iniciales)
            },2000)
        })
        getPokemons.then(response => {
            setPokemon(response)})
        },[pokemon])

    return (
        pokemon.length === 0 ?
        <>
            <div className={style.loading}>
                <h1 className={style.title}>Cargando...</h1>
            </div>
        </>
        :
        <>
            <div className={style.titleContainer}>
                <h1 className={style.title}><strong> Iniciales de Kanto </strong></h1> 
            </div>
            
            <div className={style.listContainer}>
                {pokemon.map((pokemon) => 
                    <Item 
                    key ={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    description={pokemon.description}
                    price={pokemon.price}
                    image={pokemon.image}/>)
                }
            </div>
            
        </>             
    )
}

export default ItemList;

// <>