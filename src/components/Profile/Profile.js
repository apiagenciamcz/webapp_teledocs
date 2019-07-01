import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

import './../Styles.css';
import { Link } from 'react-router-dom';

import InputMask from 'react-input-mask';


class Profile extends Component{
    render(){
        return(
            
            <div className="bg_app">
            <NavBar/>
                <div className="container bg_content">
                <div className="row">
                            <div className="col-12">
                                <h5>
                                    PROFILE
                                </h5>
                            </div>
                </div><hr/>
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div class="form-group">
                                    <label for="nome_user">Nome</label>
                                    <input type="text" class="form-control" id="nome_user" aria-describedby="emailHelp" placeholder="Israel Moreira dos Santos"></input>
                                    <small id="emailHelp" class="form-text text-muted">Nós nunca vamos compartilhar seu e-mail com mais ninguém.</small>
                                </div>
                                <div class="form-group">
                                    <label for="email_user">EMail</label>
                                    <input type="email" class="form-control" id="email_user" aria-describedby="emailHelp" placeholder="api.agenciadigital@gmail.com"></input>
                                </div>
                                <div class="form-group">
                                    <label for="sexo_user">Sexo</label>
                                    <select class="form-control" id="sexo_user">
                                            <option defaultChecked>Masculino</option>
                                            <option>Feminino</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="nascimento_user">Data de Nascimento</label>
                                    <InputMask mask="99/99/9999" id="nascimento_user" className="form-control" placeholder="21/11/1983"></InputMask>
                                </div>
                                <div class="form-group">
                                    <label for="tel_user">Telefone</label>
                                    <InputMask mask="(99) 9 9999.9999" id="tel_user" className="form-control" placeholder="82 9 99550695"></InputMask>
                                </div>
                                <div class="form-group">
                                    <label for="senha_user">Altere sua Senha</label>
                                    <input type="password" id="senha_user" className="form-control" placeholder="Digite sua senha" required></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-12">
                                <p class="text-center">
                                    <Link to="/Profile" class="btn btn-primary" role="button" aria-pressed="true">ALTERAR</Link>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;