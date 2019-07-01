import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

import './../Styles.css';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

class Visita01 extends Component{
    render(){
        return(
            
            <div className="bg_app">
            <div class="modal fade" id="cad-dependente" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-body">
                          <h1 className="h3 mb-3 font-weight-normal title_pagina">Adicione seu filho</h1>
                          <form className="form-signin">
                              <input type="text" className="form-control" placeholder="Digite o nome"></input>
                              <select class="form-control" id="exampleFormControlSelect1">
                                        <option selected>Qual o sexo?</option>
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                              </select>
                              <InputMask mask="99/99/9999" className="form-control" placeholder="Digite a data de nascimento"></InputMask>
                              <span>
                              <p className="small"><b>Nota:</b> Ao continuar, concordo que estou legalmente autorizado a tomar decisões médicas para esta pessoa.</p>
                              </span>
                              <button type="button" class="btn btn-primary btn-block" data-dismiss="modal">Salvar</button>
                          </form>
                      </div>
                    </div>
                </div>
            </div>
            <NavBar/>
                <div className="container bg_content">
                    <div className="row">
                            <div className="col-12">
                                <h5>Para quem você deseja essa consulta?</h5>
                            </div>
                    </div><hr/>
                    <div className="row">
                    <div className="col-12 bg-white rounded">
    <div className="media text-muted pt-3">
      <Link to="/visita02" className=""><svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg></Link>   
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">Israel Moreira</strong>
      </p>
    </div>
    <div className="media text-muted pt-3">
      <Link to="" data-toggle="modal" data-target="#cad-dependente"><svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"/><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg></Link>
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">Meu Filho</strong>
        Obrigatório ser menor de 18 anos.
      </p>
    </div>
    <div className="media text-muted pt-3">
      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#eaebed"/><text x="50%" y="50%" fill="#eaebed" dy=".3em">32x32</text></svg>
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">Para outra pessoa?</strong>
        Se o paciente tiver mais de 18 anos, ele precisará criar sua própria conta, mesmo que seja dependente do seu plano de saúde.
      </p>
    </div>

  </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Visita01;