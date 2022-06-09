import React, { useContext, useEffect, useState } from 'react'
import { cartCache } from '../Context/cartContext';
import styles from '../Components/cssModules/checkout.module.css'
import ButtonComponent from './ButtonComponent';
import { Link, useNavigate } from 'react-router-dom';
import { validarTel, validarMail, validarNombre,confirmarMail } from './validation';
import {collection, getFirestore, addDoc} from 'firebase/firestore'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Checkout = () => {

    const {cartPokemon, verification, getTotal, BuyFinished } = useContext(cartCache)
    const [comprador, setComprador] = useState("");
    const [phone, setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [verificationEmail,setVerificationEmail] = useState("")
    const [finished,setFinished] = useState(false)

    let navigate = useNavigate()

    const saveToFirestore = (order) => {
        const database = getFirestore()
        const orders = collection(database, 'orders')
        addDoc(orders,order).then(({id})=>   
        MySwal.fire({
            color:'black',
            icon:'success',
            iconColor:'red',
            title:<>
                <p>Su compra se realizó con exito:</p>
                <br /> 
                <p>su código de seguimiento es: <br/>
                <strong>{id}</strong></p>
                </>,
            didOpen: () => {
              MySwal.getConfirmButton()
            },
            didClose: ()  => {
                setFinished(!finished)
            }
          })
        )
    }

    useEffect(() => {
        if(finished) {
            BuyFinished(finished)
            
            return navigate("/")
        } 
    }, [finished])
    

    const saveOrder = (comprador,telefono, email) => { 
        const orderDate = new Date().toLocaleDateString()

        const buyer = {
            name: comprador,
            phone: Number(telefono),
            email: email,
            }

        const order = {
             'buyer': buyer,
             'items': buyPokemon,
             'total':getTotal(),
             'date':orderDate,
             }
        
        saveToFirestore(order)
        buyPokemon = []
        }

    let buyPokemon = []
        
    const itemNew = (pokemon, cantidad) => {
            let newItem = {
                id:pokemon.item.id,
                title:pokemon.item.name,
                price:pokemon.item.precio,
                cantidad: cantidad
            }
        buyPokemon.push(newItem)
    }
    
    const finalizarCompra = () => {
        cartPokemon.map((pokemon)=> itemNew(pokemon, pokemon.quantity));
        saveOrder(comprador,phone,email)
    }
    


    return (
        <main className={styles.checkOutContainer}>
            {verification(cartPokemon.length) ?
            <> 
            <div className={styles.TitleContainer}>
                <h1 className={styles.TitleText}>Detalles de la compra</h1>
            </div>
            <div className={styles.DetailContainer}>
                {
                    cartPokemon.map((pokemon) => {
                        return (
                        <div className={styles.DetailPokemon} key={`${pokemon.item.name} ${pokemon.quantity}`}>
                        <h3 className={styles.DetailText}>{pokemon.item.name}</h3>
                        <h3 className={styles.DetailText}> x{pokemon.quantity}</h3>
                        <h3 className={styles.DetailText}>${pokemon.item.precio * pokemon.quantity}</h3>
                        </div>
                        )
                    })
                }
                <div className={styles.TotalPrice}>
                    <h2 className={styles.DetailText}> <strong>Total:</strong> </h2>
                    <h2 className={styles.DetailText}> <strong>${getTotal()}</strong> </h2>
                </div>
            </div>
            <div className={styles.TitleContainer}>
                <h1 className={styles.TitleText}>Datos del comprador</h1>
            </div>
            <form action="" className={styles.FormContainer}>
                <h3 className={styles.FormSubtitles}>Nombre:</h3>
                <input 
                    type="text"
                    className={styles.InputForm}
                    onChange={(e) => setComprador(e.target.value)}/>
                {
                    comprador.length !== 0 && 
                    <p className={validarNombre(comprador) ? styles.correcto : styles.incorrecto }>{validarNombre(comprador) ? 'es valido!' :'no es valido'}</p>
                }
                <h3 className={styles.FormSubtitles}>Telefono:</h3>
                <input 
                    type="text"
                    className={styles.InputForm}
                    onChange={(e) => setPhone(e.target.value)}/>
                {
                    phone.length !== 0 && 
                    <p className={validarTel(phone) ? styles.correcto : styles.incorrecto }>{validarTel(phone) ? 'es valido!' :'no es valido'}</p>
                }
            
                <h3 className={styles.FormSubtitles}>E-mail:</h3>
                <input 
                    type="email"
                    className={styles.InputForm}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                {
                    email.length !== 0 && 
                    <p className={validarMail(email) ? styles.correcto : styles.incorrecto }>{validarMail(email) ? 'es valido!' :'no es valido'}</p>
                }
                <h3 className={styles.FormSubtitles}>Confirmar e-mail:</h3>
                <input 
                    type="email"
                    className={styles.InputForm}
                    onChange={(e) => setVerificationEmail(e.target.value)}/>
                {
                    email.length !== 0 && 
                    <p className={confirmarMail(email,verificationEmail) ? styles.correcto : styles.incorrecto }>{confirmarMail(email,verificationEmail) ? 'El mail coincide!' :'No hay coincidencia'}</p>
                }
            </form>

            <div className={styles.ButtonBuy}>
                <ButtonComponent 
                    action={()=>finalizarCompra()}
                    title='FINALIZAR COMPRA'
                    disabled={!(validarNombre(comprador) && validarTel(phone) && confirmarMail(email,verificationEmail))} />
                {/* <ButtonComponent action ={()=> chequeo()} title='Chequear' /> */}
            </div>
            </>
            :
            <div className={styles.NegativeContainer}>
                <h1 className={styles.TitleText}>Parece que no has comprado aún</h1>
                <h2 className={styles.subTitleText}>Vuelve al menú principal</h2>
                <Link to='/'>
                   <ButtonComponent title='Home'/> 
                </Link>
            </div>
            }
        </main>
    )
}

export default Checkout;

//<>