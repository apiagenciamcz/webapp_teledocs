import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import generalista from './../../images/generalista.jpg';
import especialista from './../../images/especialista.jpg';

import './../Styles.css';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(

            <div className="bg_app">
            <NavBar/>
                <div className="container bg_content">
                <div className="row">
                            <div className="col-12">
                                <h5>
                                    HOME
                                </h5>
                            </div>
                </div><hr/>
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <img src={generalista} class="card-img-top" alt="..."></img>
                            
                            <div className="card-body">
                            <h5 class="card-title">GENERALISTA</h5>
                            <p class="card-text">Orientação rápida de até 15 minutos.</p>
                            <span className="money"><b>R$ 50,00</b></span><hr/>
                            <Link to="/Visita01" class="btn btn-primary btn-block">Acessar</Link>  
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <img src={generalista} class="card-img-top" alt="..."></img>
                            
                            <div className="card-body">
                            <h5 class="card-title">GENERALISTA</h5>
                            <p class="card-text">Orientação com generalista de até 30 minutos.</p>
                            <span className="money"><b>R$ 100,00</b></span><hr/>
                            <Link to="/Visita01" class="btn btn-primary btn-block">Acessar</Link>  
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <img src={especialista} class="card-img-top" alt="..."></img>
                            
                            <div className="card-body">
                            <h5 class="card-title">ESPECIALISTA</h5>
                            <p class="card-text">Orientação com especialista de até 30 minutos.</p>
                            <span className="money"><b>R$ 150,00</b></span><hr/>
                            <Link to="/Visita01" class="btn btn-primary btn-block">Acessar</Link>  
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;