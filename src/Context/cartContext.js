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
            console.log('se añadió: ',item)
    }

    const IsInCart = (pokemon) => {
        if(cartPokemon.find((object)=> object.item.id === pokemon.id)) {
            return true
        } else {
            return false
        }
    }

    const verification = (element) => element !== 0

    const getTotal = () => {   
        const price = verification(cartPokemon.length) ? cartPokemon.map((pokemon) => pokemon.item.precio * pokemon.quantity) : []
    
        let totally = 0
    
        for(let index = 0; index < price.length; index++) { 
            totally = totally + price[index]
        }
        return totally    
    }

    const DeletePokemon = (id, cantidad) => {
        setPokemon(cartPokemon.filter((pokemon) => pokemon.item.id !== id))
        setCount(count - cantidad)
    }

    const BuyFinished = (finish) => {
        if(finish) {
            setPokemon([])
            setCount(0)
        }
    }

    const pokeImages = require.context("../images",true)

    const DeleteAll = () => {
        setPokemon([])
        setCount(0)
    }

    return (
        <cartCache.Provider value={{
            count, cartPokemon, getTotal,
            AddPokemon, IsInCart,
            DeletePokemon,verification,
            BuyFinished,
            DeleteAll, pokeImages}}>
                {children}
        </cartCache.Provider>
    )
}

export default CartContext;

//<>