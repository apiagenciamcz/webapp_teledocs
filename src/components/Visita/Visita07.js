import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

import './../Styles.css';
import { Link } from 'react-router-dom';

class Visita07 extends Component{
    render(){
        return(
            
            <div className="bg_app">
            <NavBar/>
                <div className="container bg_content">
                <div className="row">
                        <div className="col-12">
                            <h5>Aguarde, que estamos procurando um médico disponível para atendê-lo</h5>
                        </div>
                    </div><hr/><br/>
                    <div class="text-center">
                        <div class="spinner-border text-info" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <br/><br/>
                            <p class="text-center">
                                <Link to="/Visita06" class="btn btn-danger" role="button" aria-pressed="true">Voltar</Link>&nbsp;&nbsp;
                                <Link to="/Visita08" class="btn btn-primary" role="button" aria-pressed="true">Avançar</Link>
                            </p>
                        </div>
                    </div>
                
      
                </div>
            </div>
        )
    }
}

export default Visita07;