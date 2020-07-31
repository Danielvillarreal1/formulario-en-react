import React, {Fragment, useState} from 'react';


const Registro = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        direccion: '',
        contraseña: '',
        confirmar: '',
        nameError: '',
        emailError: 'no es un formato valido, requiere un @',
        passwordError: ''
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
        console.log(datos.nombre + '' + datos.apellido + '' + datos.email + '' + datos.telefono + '' + datos.direccion + '' + datos.contraseña + '' + datos.confirmar)
    }

    return (
        <Fragment>
            <div class="container text-center  ">
            <section>

            <h1 className="mb-5">Registro</h1>
            <form className=" row form justify-content-center flex-column " onSubmit={enviarDatos}>
                <div>
                     <div class="form-group row justify-content-center ">
                        <label htmlFor="inputText" class="col-sm-2 col-form-label text-right">Nombre</label>
                        <div class="col-sm-3">
                            <input
                                placeholder="Ingrese Nombre"
                                className="form-control"
                                type="text"
                                name="nombre"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                     </div>
                     <div class="form-group row justify-content-center ">
                        <label htmlFor="inputText" class="col-sm-2 col-form-label text-right">Apellido</label>
                        <div class="col-sm-3">
                            <input
                                placeholder="Ingrese Apellido"
                                className="form-control"
                                type="text"
                                name="apellido"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                     </div>
                     <div class="form-group row justify-content-center ">
                        <label htmlFor="inputEmail" class="col-sm-2 col-form-label text-right">Email</label>
                        <div class="col-sm-3">
                            <input
                                placeholder="Ingrese Email"
                                className="form-control"
                                type="text"
                                name="email"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                     </div>
                     <div class="form-group row justify-content-center ">
                        <label htmlFor="inputText" class="col-sm-2 col-form-label text-right">Telefono</label>
                        <div class="col-sm-3">
                            <input
                                placeholder="Ingrese Telefono"
                                className="form-control"
                                type="namber"
                                name="telefono"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                     </div>
                     <div class="form-group row justify-content-center ">
                        <label htmlFor="inputText" class="col-sm-2 col-form-label text-right">Direccion</label>
                        <div class="col-sm-3">
                            <input
                                placeholder="Ingrese Direccion"
                                className="form-control"
                                type="text"
                                name="direccion"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                     </div>
                     <div class="form-group row justify-content-center ">
                        <label htmlFor="inputpassword" class="col-sm-2 col-form-label text-right">Contraseña</label>
                        <div class="col-sm-3">
                            <input
                                placeholder="Ingrese Contraseña"
                                className="form-control"
                                type="password"
                                name="contraseña"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                     </div>
                     <div class="form-group row justify-content-center ">
                        <label htmlFor="inputPassword" class="col-sm-2 col-form-label text-right">Confirmar Contraseña</label>
                        <div class="col-sm-3">
                            <input
                                placeholder="Reingrese Contraseña"
                                className="form-control"
                                type="password"
                                name="confirmar"
                                onChange={handleInputChange}
                            ></input>
                        </div>
                     </div>
                     <div class="form-group row justify-content-center">
                         <label htmlFor="inputText" class="col-sm-2 col-form-label"></label>
                         <div class="col-sm-3">
                             <button type="submit" class="btn btn-primary btn-block btn-left">Ingresar</button>
                         </div>
                     </div>    
                </div>
            </form>

            </section>
            </div>            
    {/* <h3>{datos.nombre} - {datos.apellido} - {datos.email} - {datos.telefono} - {datos.direccion} - {datos.contraseña}</h3> */}
        </Fragment>
      
      
    );
}
  
  export default Registro;
  
