import React from "react";
import Header from "../template/Header";

import { ApiUrl } from '../services/apirest'
import axios from "axios";


class Dashboard extends React.Component{

    state={
        pacientes:[]
    }

    clickPaciente(id){
        window.location.href=("/editar/"+ id);
    }

    componentDidMount(){
        let url = ApiUrl + "pacientes?page=1";
        axios.get(url)
        .then(response =>{
            this.setState({
                pacientes : response.data
            })
        })
    }

    render(){

        return(

           <React.Fragment>
            <Header></Header>
                <div className="container">
                    <br></br>
                <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NOMBRE</th>
                                <th scope="col">DNI</th>
                                <th scope="col">TELEFONO</th>
                                <th scope="col">CORREO</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.pacientes.map((values,index) => {

                                return (
                                <tr key={index} onClick={() => this.clickPaciente(values.PacienteId)}>
                                    <td>{values.PacienteId}</td>
                                    <td>{values.Nombre}</td>
                                    <td>{values.DNI}</td>
                                    <td>{values.Telefono}</td>
                                    <td>{values.Correo}</td>
                                </tr>
                                )
                            }) }
                           
                        </tbody>
                        </table>
                </div>
           </React.Fragment>

                );
    }
}

export default Dashboard;