import { useEffect, useState, useContext } from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

const FireStoreTest = () => {
    const pokemonList = ['bulbasaur','charmander','squirtle']
    const [pokemon,setPokemon] = useState([])

    // const getPokemonData = async (region,id) => {
    //     const pokedata = getFirestore()
    //     let poke = doc(pokedata, region, id)
    //     await getDoc( poke ).then( response => {
    //         if(response.exists()) {
    //             setPokemon(pokemon.concat(response.data()))
    //             console.log(pokemon)
    //         }})
    // }

    // useEffect(()=> {
    //       pokemonList.map((poke)=> {
    //           getPokemonData('kanto',poke)
    //       })
    // }, [])

    
    
    return (
        <div>
            <h1>FireStoreTest</h1>
        </div>
    )
}

export default FireStoreTest;