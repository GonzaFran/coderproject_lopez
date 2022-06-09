import React from 'react'

const ButtonComponent = ({action,title, disabled}) => {
    return (
    <>
        <button 
            className= { disabled ? "bg-red-700 text-white py-2 px-4 rounded opacity-50 cursor-not-allowed" : "btn bg-red-700 hover:bg-red-500"}
            onClick={action}
            disabled={disabled ? disabled : false}>{title}</button>
    </>
    )
}

export default ButtonComponent;
//<> "btn bg-red-700 hover:bg-red-500"