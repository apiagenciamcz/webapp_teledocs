import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import doctor from './../../images/doctor.jpg';

import './../Styles.css';
import { Link } from 'react-router-dom';

class Visita08 extends Component{
    render(){
        return(
            
            <div className="bg_app">
            <NavBar/>
                <div className="container bg_content">
                    <div className="row">
                            <div className="col-12">
                                <div class="alert alert-success" role="alert">
                                    Médico encontrado com sucesso!
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div class="media">
                                <img src={doctor} class="align-self-center mr-3" alt="..." width="80px" height="80px"></img>
                                <div class="media-body">
                                <h5 className="card-title">Dr.Israel Moreira<br/><small className="text-muted">Clínico Geral | Maceió-Al</small></h5>
                                <p className="card-text">Por favor, aguarde o Doutor, lê os sintomas apresentados para esta consulta.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"><br/><br/>
                            <p class="text-center">
                                <Link to="/Visita07" class="btn btn-danger" role="button" aria-pressed="true">Cancelar</Link>&nbsp;&nbsp;
                                <Link to="/Visita09" class="btn btn-primary" role="button" aria-pressed="true">Avançar</Link>
                            </p>
                        </div>
                    </div>
                    
                    

                   
                </div>
            </div>
            
        )
    }
}

export default Visita08;