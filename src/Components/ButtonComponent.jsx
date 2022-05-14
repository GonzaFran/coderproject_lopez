import React from 'react'

const ButtonComponent = ({action,title}) => {
    return (
    <>
        <button className="btn bg-red-700 hover:bg-red-500" onClick={action}>{title}</button>
    </>
    )
}

export default ButtonComponent;
//<>