import {useContext} from 'react'
import { cartCache } from '../Context/cartContext';
import styles from './cssModules/cart.module.css';
import ButtonComponent from './ButtonComponent';
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cartPokemon, DeletePokemon, DeleteAll, getTotal} = useContext(cartCache)

    const verification = (element) => element !== 0

    return(
        <>
        <main className={styles.containerCart}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Carrito</h1>
                
                {
                    verification(cartPokemon.length) ?
                    <div style={{width:'15%',display:'flex',justifyContent:'center',alignItems:'center'}}> 
                        <ButtonComponent action={() => DeleteAll()} title='Limpiar carrito'/>
                    </div> : null
                }  
                
                
            </div>
            
            <section className={styles.cartTable}>
                <div className={styles.titleTableContainer}>
                    <h1 className={styles.titleTable}>Item</h1>
                    <h1 className={styles.titleTable}>Cantidad</h1>
                    <h1 className={styles.titleTable}>Precio</h1>
                    {verification(cartPokemon.length) && <h1 className={styles.titleTable}>Descartar</h1>}
                </div>
                    {
                    verification(cartPokemon.length) ? 
                    cartPokemon.map((pokemon) => {
                        return (
                        <section className={styles.itemTableContainer} key={`sectionCart + ${pokemon.item.name}`}>
                                    <h1 className={styles.itemInTable}> {pokemon.item.name}</h1>
                                    <h1 className={styles.itemInTable}>{pokemon.quantity}</h1>
                                    <h1 className={styles.itemInTable}>{"$" + pokemon.item.precio}</h1>
                                    <div className={styles.itemInTable}>
                                        <ButtonComponent action={() => DeletePokemon(pokemon.item.id, pokemon.quantity) } title='Eliminar del carrito'/>
                                    </div>
                                    
                        </section>
                        )
                    })  : 
                        <h1 className={'text-slate-200'} style={{padding:'15vh', fontSize:'3vh'}}>
                            No hay nada que mostrar
                        </h1>
                            }
            {
            verification(cartPokemon.length) ?
                <div className={styles.finalPrice}>
                    <h1 className={styles.finalPriceText}>Total: {verification(cartPokemon.length) ? "$" + getTotal() : "$0"}</h1>
                </div>
            : 
                <Link to="/" style={{marginBottom:"5vh"}}>
                    <ButtonComponent title="Volver a inicio"/>
                </Link>
            }
                
            </section>

            {
                verification(cartPokemon.length) && 
                <Link to="/checkout" className={styles.FinishBuy}>
                    <ButtonComponent title='Realizar compra'/>
                </Link>
            }
            
        </main>
        
        </>
    )
}

export default Cart;

//<>