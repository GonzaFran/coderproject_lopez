import {useState,useEffect} from 'react'
import iniciales from '../data/pokedata.js'
import Item from './Item.jsx';
import style from './cssModules/listItem.module.css'
import { Link } from 'react-router-dom';

const ItemList = () => {
    const [pokemon,setPokemon] = useState([])


    const getPokemons = () => {

        new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(iniciales)
            },2000)
        })
        .then(response => {
            setPokemon(response)})
        }

    useEffect(() => {
        getPokemons()
        },[])

        
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
                <Link key ={pokemon.id} to={`/pokemon/${pokemon.name}`} style={{width:'100%'}}>
                    <Item 
                        id={pokemon.id}
                        name={pokemon.name}
                        description={pokemon.description}
                        price={pokemon.price}
                        image={pokemon.image}/>
                </Link>
                    )}
            </div>
            
        </>             
    )
}

export default ItemList;

// <>