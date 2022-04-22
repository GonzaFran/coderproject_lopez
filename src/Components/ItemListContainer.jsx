import React from 'react'

const ItemListContainer = (props) => {

    const styles = {
        container: {
            minHeight: '100vh',
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
        }
    }

    return (
    <>
        <div style={styles.container} >
            <h1 style={{fontSize: '50px',color:'white'}}><strong>{props.user ? props.user : 'Usuario'}</strong>, Bienvenido al mercado negro pokemon</h1>
        </div>
        
    </>
    )
}

export default ItemListContainer;