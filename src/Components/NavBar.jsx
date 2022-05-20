import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartCache } from '../Context/cartContext';
import CartWidget from './CartWidget';
import style from './cssModules/navBar.module.css'

const NavBar = (props) => {
    
    const {count} =useContext(cartCache)

    return (
        <>
        <header className={style.NavigatorBar}> 
            <Link to= "/"> 
                <h1 className={style.BarTitle}> Pokemon Black-Market</h1>
            </Link> 
            <nav className={style.BarNavigation}>
                <ul className={style.listContainer}>
                {props.items.map((item,index) =>
                    <Link to={item} key = {props.items[index]}>
                        <button>
                            <li className={style.listItem}>
                            {item}
                            </li> 
                        </button>
                    </Link>)}
                </ul>
            </nav>
            {
                count !== 0 ?
                <CartWidget action={props.action}/> : null
            }                       
        </header>
        </>
    )
}

export default NavBar

// <>