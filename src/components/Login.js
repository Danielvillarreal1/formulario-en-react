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
         <div class="container-fluid text-center pt-5">  
            <section>
                <h1 className="mb-5 text-center">Login</h1>
                <form className=" row form justify-content-center flex-column" onSubmit={enviarDatos}>
                
                    <div>
                        
                        
                        <div class="form-group row justify-content-center">
                            <label for="inputText" class="col-sm-2 col-form-label text-right">Usuario</label>
                            <div class="col-sm-3"> 
                                <input

                                    placeholder="Ingrese Usuario"
                                    className="form-control"
                                    type="text"
                                    name="usuario"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                        </div>    
                        <div class="form-group row justify-content-center">
                            <label for="inputText" class="col-sm-2 col-form-label text-right">Clave</label>
                            <div class="col-sm-3"> 
                                <input

                                    placeholder="Ingrese Clave"
                                    className="form-control"
                                    type="text"
                                    name="clave"
                                    onChange={handleInputChange}
                                ></input>
                            </div>
                        </div>

                        <div class="form-group row justify-content-center">
                            <label for="inputText" class="col-sm-2 col-form-label"></label>
                            <div class="col-sm-3">
                                <button type="submit" class="btn btn-primary btn-block ">Ingresar</button>
                                <p class="text text-center mt-3">hdhhdfmmk iiiifff mmccddd</p>
                            </div>
                        </div>
                    </div> 
                </form>

            
            </section>
           </div>  
              <h3>{datos.usuario} - {datos.clave} </h3>
        </Fragment>
      
      
    );
}
  
  export default Login;
  





