import React from 'react';
import CartWidget from './CartWidget';
import style from './cssModules/navBar.module.css'

const NavBar = (props) => {
    
    return (
        <>
        <header className={style.NavigatorBar}>
            <h1 className={style.BarTitle}> Pokemon Black-Market</h1>
            <nav className={style.BarNavigation}>
            <ul className={style.listContainer}>
                {props.items.map((item) =>
                    <button>
                        <li className={style.listItem}>
                        {item}
                        </li> 
                    </button>
                )}
            </ul>
        </nav>    
            <CartWidget action={props.action}/>
        </header>
        
        
        </>
    )
}

export default NavBar

// <>