import { useEffect } from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore'


const FireStoreTest = () => {

    const getPokemonData = () => {
        const pokedata = getFirestore()
        const bulbasaur = doc(pokedata, 'kanto', 'JfwdtrMyk6X5wIGDFMx0')
        getDoc( bulbasaur ).then( response => {
            if(response.exists()) {
                console.log(response.data())}
        })
    }

    useEffect(()=> {
        getPokemonData()
        }, [])
    
    
    return (
        <div>
            <h1>FireStoreTest</h1>
        </div>
    )
}

export default FireStoreTest;