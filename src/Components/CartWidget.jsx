import React from 'react';
import pokeball from './iconFolder/pokeball.svg'
import style from './cssModules/cartwidget.module.css'

const CartWidget = (props) => {
    return (
    <>
        <div style={{display:'flex',flexDirection:'row',width:'10%', marginRight:'15px'}}>
            <button className={style.pokeballButton} onClick={props.action}>
                <img src={pokeball} alt="pokeball" width={'35px'} height={'35px'}/>
                
            </button>
            <div className={style.counterContainer}>
                <h6 className={style.counter}>{props.counter ? props.counter : 0}</h6>
            </div>
        </div>
    </>
    )
}

export default CartWidget;