import React from 'react';
import style from './cssModules/itemDetail.module.css';

const ItemDetail = (props) => {

    return (
        <main className= {style.DetailContainer}>
            <div className={style.DetailImage}>
                <img src={props.image} alt={props.name} width="160px" height="160px" />
            </div>
            <div className={style.DetailDescription}>
                <h1 className={style.title}>DATOS POKEMON</h1>
                <h1> <strong>NOMBRE:</strong> {props.name} </h1>
                <h2> <strong>{props.id}</strong> </h2>
                <h3> <strong>TIPO:</strong> {props.type} </h3>
                <h2> {props.descripcion} </h2>
                <h2> <strong>PRECIO:</strong> {props.precio} </h2>
            </div>
        </main>
    )
}

export default ItemDetail;