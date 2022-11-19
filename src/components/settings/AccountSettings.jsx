import React from 'react'

const AccountSettings = () => {
  return (
    <div className="container main_account_setting">
        <h1>Ajuste de cuenta</h1>
        <div className="account_form">
        <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" disabled={true} aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Actualizar</button>
                    
            </form>
        </div>
    </div>
  )
}

export default AccountSettings