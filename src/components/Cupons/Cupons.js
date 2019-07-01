import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

import './../Styles.css';
import { Link } from 'react-router-dom';

class Cupons extends Component{
    render(){
        return(
            
            <div className="bg_app">
            <NavBar/>
                <div className="container bg_content">
                <div className="row">
                            <div className="col-12">
                                <h5>
                                   MEUS CUPONS
                                </h5>
                            </div>
                </div><hr/>
                    <div className="row">
                        <div className="col-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Aplicar novo cupom.</h5>
                                <p class="card-text">Observe que o seu cupom não pode ser utilizado em caso de consulta subsídiada pelo seu plano de saúde ou empregador.</p>
                                <form className="">
                                    <input type="text" className="form-control form-control-lg col-12" placeholder="Digite seu código do cupom." required autofocus></input>
                                </form>
                                <Link to="/Cupons" class="btn btn-primary float-right" role="button" aria-pressed="true">Aplicar Cupom</Link>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cupons;