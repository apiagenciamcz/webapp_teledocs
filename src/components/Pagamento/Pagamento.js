import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';


import './../Styles.css';
import InputMask from 'react-input-mask';


class Pagamento extends Component{
    render(){
        return(
            
            <div className="bg_app">
                <div class="modal fade" id="modal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">DADOS DO CARTÃO</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div class="modal-body">
                            <form className="form-signin">
                                <InputMask mask="9999 9999 9999 9999" id="num_card" className="form-control" placeholder="Digite o Número do Cartão"></InputMask>
                                <InputMask mask="99/99/9999" id="tel_user" className="form-control" placeholder="Digite a Data de Validade"></InputMask>
                                <input type="number" className="form-control" placeholder="Digite o Código Verificador"></input>
                                <button type="button" class="btn btn-primary btn-lg active btn-block" data-dismiss="modal">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <NavBar/>
            <div className="container bg_content">

                <div className="row">
                            <div className="col-12">
                                <h5>
                                   MEIOS DE PAGAMENTO
                                </h5>
                            </div>
                </div><hr/>
                <div className="row">
                        <div className="col-12">
                            <div class="card mb-3">
                                <div className="card-body">
                                        <span>DADOS DO CARTÃO</span><hr/>
                                        <div>
                                            <text><b>BANDEIRA:</b> MasterCard</text><br/>
                                            <text><b>NOME DO TÍTULAR:</b> Israel Moreira</text><br/>
                                            <text><b>NÚMERO DO CARTÃO:</b> 4001 6358 0635 0157</text><br/>
                                            <text><b>VALIDADE:</b> 05/19</text><br/>
                                            <text><b>CÓDIGO:</b> 579</text>
                                        </div><br/>
                                </div>
                            </div>
                            <div className="row">
                        <div className="col-12">
                            <p class="text-center">
                            <button type="button" class="btn btn-info btn-sm btn_pag" data-toggle="modal" data-target="#modal4">ADICIONAR NOVO CARTÃO</button>
                            </p>
                        </div>
                    </div>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Pagamento;