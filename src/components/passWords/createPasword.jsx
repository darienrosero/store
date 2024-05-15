// eslint-disable-next-line no-unused-vars
import React from 'react'
import './styles.css'
import Titulos from './titulo/titulos'
import Form from '../form/form'

const CreatePasword = () => {
    return (
        <div>
            <div className="login">
                <div className="form-container">
                    <img src="public/logos/logo_yard_sale.svg" />
                        <Titulos />
                        <Form />
                </div>
            </div>
        </div>
                        )
}

export default CreatePasword
