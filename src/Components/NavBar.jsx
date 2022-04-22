import React from 'react';
import CartWidget from './CartWidget';
import style from './cssModules/navBar.module.css'

const NavBar = (props) => {
    
    const Styles = {
        BarNavigation: {
            width: '100%',
            backgroundColor:'black',
            display:'flex',
            justifyContent:'flex-end'
        },
        NavigatorBar:{
            backgroundColor:'black',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems:'center'
        },
        BarTitle: {
            marginLeft:'10vh',
            color:'white',
            fontWeight:'bold',
            fontSize: 20,
            width:'100%'
        },
        listContainer:{
            width:'100%',
            minHeight:'8vh',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'           
        },
        listItem:{
            color:'white',
            minHeight:'8vh',
            width:'100%',
            backgroundColor:'#000000',
            paddingLeft:'20px',
            paddingRight:'20px',
            display:'flex',
            alignItems:'center',
            transitionDuration: '0.4s',
        },
        
    }

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