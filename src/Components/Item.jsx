import React, { useContext } from 'react'
import pokeball from './iconFolder/pokeball.svg'
import style from './cssModules/item.module.css'
import { cartCache } from '../Context/cartContext'

const Item = ({id,name,description,price,image}) => {

    const {pokeImages} = useContext(cartCache)
    

    return (
    <>  
        <main className={style.container}>
            <div className={style.itemContainer}>
                    <img src={pokeball} className={style.pokeball} alt="pokeball" width={'35px'} height={'35px'}/> 
                <div className= {style.item}>
                    <div className={style.pokemon}>
                        <img src={pokeImages(`./${image}.png`)} alt={name} width={'100px'} height={'100px'}/> 
                    </div>
                    <h3 style={{color:'white'}}> <strong>#{id}</strong> </h3>
                    <h1 style={{color:'white'}}>{name}</h1>
                    <h2 style={{color:'white'}}>{description}</h2>  
                    <h3 style={{color:'white',fontWeight:'bold'}}> ${price},00</h3>
                </div>               
            </div>
        </main>
    </>    
    )
}

export default Item