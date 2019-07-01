import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

import './../Styles.css';
import { Link } from 'react-router-dom';

class Visita02 extends Component{
    render(){
        return(
            
            <div className="bg_app">
            <NavBar/>
                <div className="container bg_content">
                    <form className="">
                    <div className="row">
                        <div className="col-12">
                            <h5>Qual a razão dessa consulta?</h5><hr/>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descreva aqui os motivos de sua consulta"></textarea>
                            <p><span className="float-right">240/280</span></p>
                        </div>
                    </div><p/>
                    <div className="row">
                        <div className="col-12">
                            <p class="text-center">
                                <Link to="/Visita01" class="btn btn-danger" role="button" aria-pressed="true">Voltar</Link>&nbsp;&nbsp;
                                <Link to="/Visita03" class="btn btn-primary" role="button" aria-pressed="true">Avançar</Link>
                            </p>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Visita02;