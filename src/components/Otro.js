import React, {Fragment, useState} from 'react';


const Login = () => {

    const [datos, setDatos] = useState({
        usuario: '',
        clave: ''
    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.usuario + '' + datos.clave)
    }

    return (
        <Fragment>
         <div className="col-lg-4">
            <div className="card text-center">
            <div className="card-body">     

            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
               
               <div className="form-group">
                   
                <div className="input-group col-sm col-md-3 col-lg col-xl pb-3">
                  
               
                    <label htmlFor="name">Usuario </label> 
                    <input

                        placeholder="Ingrese Usuario"
                        className="form-control"
                        type="text"
                        name="usuario"
                        onChange={handleInputChange}
                    ></input>
                    
                </div>
                   
                
                <div className=" input-group col-sm col-md-3 col-lg col-xl pb-3">
                <label htmlFor="sername"> clave</label>
                    <input
                        placeholder="Ingrese Apellido"
                        className="form-control"
                        type="password"
                        name="clave"
                        onChange={handleInputChange}
                    ></input>
                    
                </div>
                <div className="col-md-3 col-sm col-md-3 col-lg col-xl">
                    <button className="btn btn-primary btn-block" type="submit">Enviar</button>
                </div>
                </div> 
            </form>

            </div>
            </div>
            </div>
              <h3>{datos.usuario} - {datos.clave} </h3>
        </Fragment>
      
      
    );
}
  
  export default Login;
  