import { useContext, useState } from 'react';
import style from './cssModules/itemDetail.module.css';
import ButtonComponent from './ButtonComponent';
import { cartCache } from '../Context/cartContext';
import QuantityButton from './QuantityButton';
import AlertMessage from './AlertMessage';
import { Link } from 'react-router-dom';

const ItemDetail = (props) => {

    const {AddPokemon,IsInCart,pokeImages} = useContext(cartCache)
    const Pokemon = props
    
    const [alertConfig, setAlertConfig] = useState({
        alertText: null,
        type: null,
        visibility: false,
    })
    
    const [quantity, setQuantity] = useState(0)
    const [closeBuy, setCloseBuy] = useState(false)


    //funciones complementarias

    const upQuantity = () => {
        quantity < 5 && setQuantity(quantity + 1)
        
    }

    const downQuantity = () => {
        quantity > 0 && setQuantity(quantity - 1)
    }

    const AddItem = () => {
        if(quantity !== 0 ) {
            if(IsInCart(Pokemon)) {
                setAlertConfig({
                    alertText:`${Pokemon.name} ya se encuentra en el carrito`,
                    type:"error",
                    visibility:true})
                setTimeout(() => { setAlertConfig({ visibility:false })
                    }, 2000);
            } else {
                AddPokemon(Pokemon,quantity);
                setCloseBuy(true)
                setAlertConfig({
                    alertText:`${Pokemon.name} se añadió al carrito`,
                    type:"success",
                    visibility:true})
                    setQuantity(0)
                setTimeout(() => {setAlertConfig({ visibility:false})
                    }, 2000);}
        } else {
            setAlertConfig({
                alertText:"Para agregar un item debe definir una cantidad",
                type:"error",
                visibility:true})
            setTimeout(() => {
                setAlertConfig({
                    visibility:false
                })
            }, 2000);
        }
    }

    return (

        <div className={style.body}>
            <main className= {style.DetailContainer}>
                <div className={style.DetailImage}>
                    <img src={pokeImages(`./${Pokemon.image}.png`)} alt={Pokemon.name} width="160px" height="160px" />
                </div>
                <div className={style.DetailDescription}>
                    <h1 className={style.title}>DATOS POKEMON</h1>
                    <h1> <strong>NOMBRE:</strong> {Pokemon.name} </h1>
                    <h2> <strong>{Pokemon.id}</strong> </h2>
                    <h3> <strong>TIPO:</strong> {Pokemon.type} </h3>
                    <h2> {Pokemon.descripcion} </h2>
                    <h2> <strong>PRECIO:</strong> {"$" + Pokemon.precio} </h2>
                </div>
            </main>
            <div className={style.dimensionsDiv}>
                {
                    closeBuy ? 
                    <>
                    <ButtonComponent action={() => {setCloseBuy(false)}} title="Seguir comprando"/>
                    <Link to="/cart">
                        <ButtonComponent title="Finalizar compra"/>
                    </Link>   
                    </>
                    :
                    <>
                    <QuantityButton quantity={quantity} actionDown={downQuantity} actionUp={upQuantity} />
                    <ButtonComponent action={() => AddItem()} title="Añadir al carrito"/>
                    </>
                }
            </div>
            <div className= {style.dimensionsDiv}>
                <AlertMessage
                    alertText={alertConfig.alertText}
                    type={alertConfig.type}
                    visibility={alertConfig.visibility}/>
            </div>
        
        </div>
    )
}

export default ItemDetail;
//<>