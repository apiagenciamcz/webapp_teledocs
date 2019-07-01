import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import consulta from './../../images/doctor.jpg';

import './../Styles.css';




class Consultas extends Component{
    render(){
        return(


            <div className="bg_app">

            <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">PROBLEMA</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">RECEITA</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">MENSAGEM</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    </div>
                </div>
            </div>
                <NavBar/>
                
                <div className="container bg_content">
                
                <div className="row">
                            <div className="col-12">
                                <h5>
                                    SUAS CONSULTAS
                                </h5>
                            </div>
                </div><hr/>
                

                <div className="row"><br/><br/>
                        <div className="col-lg-3 col-md-12">
                            <div className="card">
                                <img src={consulta} class="card-img-top" alt="..."></img>
                            
                            <div className="card-body">
                                    <span>15.03.2019 | 19:14</span><hr/>
                                    <div>
                                        <text><b>MÉDICO ESPECIALISTA:</b> Israel Moreira</text><br/>
                                        <text><b>ESPECIALIDADADE:</b> Neurologista</text><br/>
                                        <text><b>TEMPO DE CONSULTA:</b> 30 Minutos</text><br/>
                                    </div>
                                    <text><b>VALOR:</b> <span className="money">R$ 150,00</span></text><br/><br/>
                                    <div className="">
                                        <button type="button" class="btn btn-danger btn-sm btn-block" data-toggle="modal" data-target="#modal1">PROBLEMA</button>
                                        <button type="button" class="btn btn-warning btn-sm btn-block" data-toggle="modal" data-target="#modal2">RECEITA</button>
                                    </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="card">
                                <img src={consulta} class="card-img-top" alt="..."></img>
                            
                            <div className="card-body">
                                    <span>15.03.2019 | 19:14</span><hr/>
                                    <div>
                                        <text><b>MÉDICO ESPECIALISTA:</b> Israel Moreira</text><br/>
                                        <text><b>ESPECIALIDADADE:</b> Neurologista</text><br/>
                                        <text><b>TEMPO DE CONSULTA:</b> 30 Minutos</text><br/>
                                    </div>
                                    <text><b>VALOR:</b> <span className="money">R$ 150,00</span></text><br/><br/>
                                    <div className="">
                                        <button type="button" class="btn btn-danger btn-sm btn-block" data-toggle="modal" data-target="#modal1">PROBLEMA</button>
                                        <button type="button" class="btn btn-warning btn-sm btn-block" data-toggle="modal" data-target="#modal2">RECEITA</button>
                                        <button type="button" class="btn btn-info btn-block" role="button" aria-pressed="true">MENSAGEM&nbsp;<span class="badge badge-light">4</span></button>
                                    </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="card">
                                <img src={consulta} class="card-img-top" alt="..."></img>
                            
                            <div className="card-body">
                                    <span>15.03.2019 | 19:14</span><hr/>
                                    <div>
                                        <text><b>MÉDICO ESPECIALISTA:</b> Israel Moreira</text><br/>
                                        <text><b>ESPECIALIDADADE:</b> Neurologista</text><br/>
                                        <text><b>TEMPO DE CONSULTA:</b> 30 Minutos</text><br/>
                                    </div>
                                    <text><b>VALOR:</b> <span className="money">R$ 100,00</span></text><br/><br/>
                                    <div className="">
                                        <button type="button" class="btn btn-danger btn-sm btn-block" data-toggle="modal" data-target="#modal1">PROBLEMA</button>
                                        <button type="button" class="btn btn-warning btn-sm btn-block" data-toggle="modal" data-target="#modal2">RECEITA</button>
                                    </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="card">
                                <img src={consulta} class="card-img-top" alt="..."></img>
                            
                            <div className="card-body">
                                    <span>15.03.2019 | 19:14</span><hr/>
                                    <div>
                                        <text><b>MÉDICO ESPECIALISTA:</b> Israel Moreira</text><br/>
                                        <text><b>ESPECIALIDADADE:</b> Neurologista</text><br/>
                                        <text><b>TEMPO DE CONSULTA:</b> 30 Minutos</text><br/>
                                    </div>
                                    <text><b>VALOR:</b> <span className="money">R$ 0,00</span></text><br/><br/>
                                    <div className="">
                                        <button type="button" class="btn btn-danger btn-sm btn-block" data-toggle="modal" data-target="#modal1">PROBLEMA</button>
                                        <button type="button" class="btn btn-warning btn-sm btn-block" data-toggle="modal" data-target="#modal2">RECEITA</button>
                                        <button type="button" class="btn btn-info btn-block" role="button" aria-pressed="true">MENSAGEM&nbsp;<span class="badge badge-light">4</span></button>
                                    </div>
                            </div>
                            </div>
                        </div>
                        
                </div>
                </div>
            </div>
        )
    }
}

export default Consultas;