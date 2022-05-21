import {useState,useEffect,useContext} from 'react'
import iniciales from '../data/pokedata.js'
import Item from './Item.jsx';
import style from './cssModules/listItem.module.css'
import { Link } from 'react-router-dom';
import {getDocs, getFirestore, collection} from 'firebase/firestore'

const ItemList = () => {
    const [pokemon,setPokemon] = useState([])

    useEffect(() => {
      getPokemonData()
    }, [])
    
    const getPokemonData = () => {
        const pokedata = getFirestore()
        const pokemonCollection = collection(pokedata,'kanto')
        getDocs(pokemonCollection).then(snapshot => {
            if(snapshot.size > 0 ) {
               const poke = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
               setPokemon(poke)
            }
        })
    }

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
                        image={pokemon.id}/>
                </Link>
                    )}
            </div>
            
        </>             
    )
}

export default ItemList;

// <>