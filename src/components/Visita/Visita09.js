import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import doctor from './../../images/doctor.jpg';

import './../Styles.css';
import { Link } from 'react-router-dom';

import Stars from '../Stars/Stars';


class Visita09 extends Component{


    render(){
        return(
            
            <div className="bg_app">
            <NavBar/>
                <div className="container bg_content">
                    <div className="row">
                            <div className="col-12">
                                <h5>Por favor, nos dê um feedback.</h5>
                            </div>
                    </div><hr/>
                    <form>
                    <div className="row">
                            <div className="col-12">
                                <span>Como você percebe a urgência do seu problema?</span>
                                <div class="form-check"><br/>
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"></input>
                                    <label class="form-check-label" for="exampleRadios1">
                                        <span className="text-success">Não Urgente</span>
                                    </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                                <label class="form-check-label" for="exampleRadios2">
                                    <span className="text-warning">Urgente</span>
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2"></input>
                                <label class="form-check-label" for="exampleRadios3">
                                    <span className="text-danger">Grave</span>
                                </label>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                            <div className="col-12"><br/>
                                <span>O médico te encaminhou para o pronto-socorro?</span>
                                <div class="form-check"><br/>
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="socorro_sim" value="option1"></input>
                                    <label class="form-check-label" for="socorro_sim">
                                        <span className="">Sim</span>
                                    </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="socorro_nao" value="option2"></input>
                                <label class="form-check-label" for="socorro_nao">
                                    <span className="">Não</span>
                                </label>
                                </div>

                            </div>
                    </div>
                    <div className="row doctor_stars">
                        <div className="col-12">
                            <div class="media">
                                <img src={doctor} class="align-self-center mr-3" alt="..." width="80px" height="80px"></img>
                                <div class="media-body">
                                <h5 className="card-title_doctor_stars">Dr.Israel Moreira<br/><small className="text-muted">Clínico Geral | Maceió-Al</small></h5>
                                <Stars/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div class="collapse" id="collapseExample">
                                    <div class="alert alert-success" role="alert">
                                        Obrigado pelo feedback.
                                    </div>
                            </div>
                            <div class="collapse" id="collapseExample1">
                            <div class="alert alert-danger" role="alert">
                            <h4 class="alert-heading">Obrigado pelo feedback!</h4><hr/>
                            <p class="mb-0">O que poderíamos ter feito melhor para tornar isso uma experiência de 5 estrelas?</p>
                            </div>
                            <form>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Deixe um comentário aqui"></textarea>
                            </form>
                            </div>
                        </div>
                    </div>
                    
                    </form>
                    <div className="row">
                        <div className="col-12"><br/><br/>
                            <p class="text-center">
                                <Link to="/Home" class="btn btn-primary" role="button" aria-pressed="true">Enviar</Link>
                            </p>
                        </div>
                    </div>
                    
                    

                   
                </div>
            </div>
            
        )
    }
}


export default Visita09;