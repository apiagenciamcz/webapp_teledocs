import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

import './../Styles.css';
import { Link } from 'react-router-dom';

class Visita05 extends Component{
    render(){
        return(
            
            <div className="bg_app">
            <NavBar/>
                <div className="container bg_content">
                    <div className="row">
                        <div className="col-12">
                            <h5>Aguarde, estamos avaliando a qualidade de sua conexão.</h5>
                        </div>
                    </div><hr/><p/>
                    <div class="text-center">
                        <div class="spinner-border text-info" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div><p/>
                    <div className="row">
                        <div className="col-12 text-center">
                         <span className="">Conexão avaliada com sucesso!</span>
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-12">
                            <p class="text-center">
                                <Link to="/Visita04" class="btn btn-danger" role="button" aria-pressed="true">Voltar</Link>&nbsp;&nbsp;
                                <Link to="/Visita06" class="btn btn-primary" role="button" aria-pressed="true">Avançar</Link>
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}

export default Visita05;