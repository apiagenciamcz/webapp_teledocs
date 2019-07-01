import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

import './../Styles.css';
import { Link } from 'react-router-dom';

class Contatos extends Component{
    render(){
        return(
            
            <div className="bg_app">
            <NavBar/>
                <div className="container bg_content">
                <div className="row">
                            <div className="col-12">
                                <h5>
                                    CONTATOS
                                </h5>
                            </div>
                </div><hr/>
                    <div className="row">
                        <div className="col-12">
                            <form className="">
                                <div class="form-group">
                                    <label for="nome_user">Digite sua Mensagem</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" ></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-12">
                                <p class="text-center">
                                    <Link to="/Contatos" class="btn btn-primary" role="button" aria-pressed="true">ENVIAR</Link>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contatos;