import Styles from './cssModules/quantityButton.module.css'

const QuantityButton = (props) => {

    return (
    <div className={Styles.container}>
        <button onClick={props.actionDown} className="btn bg-red-700 hover:bg-red-600">-</button>
        <input  className={Styles.input} disabled="disabled" type="text" value={props.quantity}/>
        <button onClick={props.actionUp} className="btn bg-red-700 hover:bg-red-600">+</button>
    </div>
    )
}

export default QuantityButton;