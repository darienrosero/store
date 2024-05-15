// eslint-disable-next-line no-unused-vars
import React from 'react'
import './styles.css'

const Form = () => {
  return (
    <div>
         <form action="/" className="form">
             <label htmlFor="password" className="label">Password</label>
             <input type="password" id="password" placeholder="*********" className="input input-password"/>

             <label htmlFor="new-password" className="label">Password</label>
             <input type="password" id="new-password" placeholder="*********" className="input input-password"/>

             <input type="submit" value="Confirm" className="primary-button login-button"/>
         </form>
    </div>
  )
}

export default Form
