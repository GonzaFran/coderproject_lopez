import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import style from './cssModules/navBar.module.css'

const NavBar = (props) => {
    
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
            <CartWidget action={props.action}/>
    </header>
    </>
    )
}

export default NavBar

// <>