import React from "react";
import { ApiUrl } from "../services/apirest";
//librerias
import axios from 'axios';
//template
import Header from "../template/Header";

class Editar extends React.Component{

    state = {
        form:{
            "nombre" : "",
            "direccion": "",
            "dni" : "",
            "correo":"",
            "codigoPostal" :"",
            "genero" : "",
            "telefono" : "",
            "fechaNacimiento" : "",
            "token" : "" , 
            "pacienteId" : "" 
        },
        error : false,
        errormsg : ""

    }

    manejadorChange = async e=> {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
 
    }

    put =() =>{
        console.log(this.state.form)
        let url = ApiUrl + "pacientes";
        axios.put(url, this.state.form)
        .then(response =>{
            console.log(response)
        })
    }

    manejadorSubmit = e =>{
        e.preventDefault();
    }

    componentDidMount(){
        let pacienteId = this.id;
        let url = ApiUrl + "/pacientes?id=" + pacienteId;
        axios.get(url)
        .then( response => {
            this.setState({
                form: {
                    nombre: response.data[0].Nombre,
                    direccion: response.data[0].Direccion,
                    dni: response.data[0].DNI,
                    correo: response.data[0].Correo,
                    codigoPostal: response.data[0].CodigoPostal,
                    genero: response.data[0].Genero,
                    telefono: response.data[0].Telefono,
                    fechaNacimiento: response.data[0].FechaNacimiento,
                    token: localStorage.getItem("token"), 
                    pacienteId: pacienteId   
                }
            });
        })
    }

    render(){ const form = this.state.form

        return(

           <React.Fragment>
            <Header></Header>
            <div className="container">
                <h3>Editar Paciente</h3>
            </div>
            <div className="container">
                <br></br>
                <form className="form-horizontal" onSubmit={this.manejadorSubmit}>
                    <div className="row">
                        <div className="col-sm-12">
                            <label className="col-md2 control-label">Nombre</label>
                            <div className="col-md-10">
                                <input className="form-control" name="nombre" placeholder="Nombre" type="text"  value={form.nombre} onChange={this.manejadorChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <label className="col-md2 control-label">Direccion</label>
                            <div className="col-md-10">
                                <input className="form-control" name="direccion" placeholder="Direccion" type="text" value={form.direccion} onChange={this.manejadorChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label className="col-md2 control-label">DNI</label>
                            <div className="col-md-8">
                                <input className="form-control" name="dni" placeholder="DNI" type="text" value={form.dni} onChange={this.manejadorChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label className="col-md2 control-label">Telefono</label>
                            <div className="col-md-8">
                                <input className="form-control" name="telefono" placeholder="Telefono" type="text" value={form.telefono} onChange={this.manejadorChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label className="col-md2 control-label">Codigo Postal</label>
                            <div className="col-md-8">
                                <input className="form-control" name="codigoPostal" placeholder="Codigo Postal" type="text" value={form.codigoPostal} onChange={this.manejadorChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label className="col-md2 control-label">Fecha Nacimiento</label>
                            <div className="col-md-8">
                                <input className="form-control" name="fechaNacimiento" placeholder="Fecha Nacimiento" type="text" value={form.fechaNacimiento} onChange={this.manejadorChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label className="col-md2 control-label">Genero</label>
                            <div className="col-md-8">
                                <input className="form-control" name="genero" placeholder="Genero" type="text" value={form.genero} onChange={this.manejadorChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label className="col-md2 control-label">Correo</label>
                            <div className="col-md-8">
                                <input className="form-control" name="correo" placeholder="Correo" type="text" value={form.correo} onChange={this.manejadorChange} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary" style={{marginRight: "10px"}} onClick={() => this.put()} >Editar</button>
                    <button type="submit" className="btn btn-danger" style={{marginRight: "10px"}}>Eliminar</button>
                    <a className="btn btn-dark" href="/dashboard" style={{marginRight: "10px"}}>Salir</a>
                </form>
            </div>
           </React.Fragment>
                );
    }
}

export default Editar;