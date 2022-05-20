import { createContext, useState } from 'react'

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

    const DeletePokemon = (id, cantidad) => {
        setPokemon(cartPokemon.filter((pokemon) => pokemon.item.id !== id))
        setCount(count - cantidad)
    }

    const DeleteAll = () => {
        setPokemon([])
        setCount(0)
    }

    return (
        <cartCache.Provider value={ {count, cartPokemon, AddPokemon,IsInCart, DeletePokemon, DeleteAll} }>
            {children}
        </cartCache.Provider>
    )
}

export default CartContext;

//<>