import React from 'react'

const BrandSettings = () => {
  return (
    <div className="container main_brand_setting">
        <h1>Ajuste de marca</h1>
        <div className="brand_form">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nombre de la marca</label>
                    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre de la marca" />
                    </div>
                    <button type="submit" className="btn btn-primary">Actualizar</button>
                 </form>
                 </div>

                 <div className="account_type">
                        <h2>Tipo de cuenta</h2>
                        <div className="account_type_form">
                            <h3>Gratis(solo puede agregar una marca)</h3>
                        </div>
                        <button>
                            Cambiar a premium
                        </button>
                 </div>
    </div>
  )
}

export default BrandSettings