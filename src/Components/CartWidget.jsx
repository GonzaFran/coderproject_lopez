import React, { useContext } from 'react';
import pokeball from './iconFolder/pokeball.svg';
import style from './cssModules/cartwidget.module.css';
import { cartCache } from '../Context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = (props) => {

    const styles = {
        image: {
            minWidth:"35px",
            minHeight:"35px"
        }
    }

    const {count} = useContext(cartCache)

    return (
    <>  
        <Link to="/cart" style={{display:'flex',flexDirection:'row',width:'10%'}}>
            <button className={style.pokeballButton} onClick={props.action}>
                <img src={pokeball} alt="pokeball" style={styles.image}/>
                
            </button>
            <div className={style.counterContainer}>
                <h6 className={style.counter}>{count}</h6>
            </div>
        </Link>
    </>
    )
}

export default CartWidget;