import { createContext, useState } from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

export const cartCache = createContext({
    count: 0,
    cartPokemon: [],
    addPokemon: () => {},
})


const CartContext = ({ children }) => {

    const [cartPokemon,setPokemon] = useState([])
    const [count, setCount] = useState(0)
    
    const AddPokemon = (pokemon, cantidad) => {
            let item = {item:pokemon, quantity: cantidad}
            setPokemon(cartPokemon.concat(item))
            setCount(count + cantidad)
            console.log(item)
    }

    const IsInCart = (pokemon) => {
        if(cartPokemon.find((object)=> object.item.id === pokemon.id)) {
            return true
        } else {
            return false
        }
    }


    const pokeImageRoute = (ubication,id) => {
        return  ubication + 'images/' + id + '.png'
    }

    const DeletePokemon = (id, cantidad) => {
        setPokemon(cartPokemon.filter((pokemon) => pokemon.item.id !== id))
        setCount(count - cantidad)
    }

    const pokeImages = require.context("../images",true)

    const DeleteAll = () => {
        setPokemon([])
        setCount(0)
    }

    return (
        <cartCache.Provider value={{
            count, cartPokemon,
            AddPokemon, IsInCart,
            DeletePokemon,
            DeleteAll, pokeImages}}>
                {children}
        </cartCache.Provider>
    )
}

export default CartContext;

//<>