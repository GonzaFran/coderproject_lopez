import React from "react";

export const validarTel = (tel) => {
    const regEx = /[0-9]{8}$/gm

    return regEx.test(tel)
}

export const validarMail = (email) => {
    const regEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    return regEx.test(email)

}

export const validarNombre = (nombre) => {
    const regEx =/^[A-Z]+$/i

    return regEx.test(nombre)

}

export const confirmarMail = (mail,validationMail) => {
    if(mail.length > 0) return mail === validationMail
    else return false


}