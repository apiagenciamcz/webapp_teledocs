import React, { Component } from 'react';
import logob from './../../images/LogoB.jpg';
import slide01 from './../../images/slider01.jpg';
import slide02 from './../../images/slider02.jpg';

import './Cadastro.css';
import { Link } from 'react-router-dom';
import { FacebookLoginButton } from "react-social-login-buttons";
import InputMask from 'react-input-mask';


class Cadastro extends Component{
    render(){
        return(
            <div className="container-fluid">
          <div className="row">
          <div className="col-6 left_login d-none d-lg-block">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={slide02} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                          <img src={slide01} class="w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                          <img src={slide02} className="w-100" alt="..."/>
                        </div>
                      </div>
                      <img src={logob} alt="logo" className="logo_home"/>
                      
                      <div className="txt_description">Inovações digitais de saúde estão mudando nossas vidas para melhor. O TeleDocs é 
                        uma solução inovadora de atendimento virtual ajudará a resolver muitos dos desafios 
                        na atenção primária e atender às necessidades de pacientes, médicos, planos de saúde 
                        e empregadores.</div>
                      
                </div>
              </div>
              <div className="col-lg-6 col-md-12 form_cadastro">
                    
                    <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal title_pagina">Criar Nova Conta</h1>
                    <FacebookLoginButton className="btn_facebook"><span className="text-center txtface">Cadastre-se com o Facebook</span></FacebookLoginButton><br/>
                    <p class="text-center">Ou entre com os seus dados.</p>
                        <input type="text" className="form-control form-control-lg" placeholder="Digite seu nome"></input>
                        <input type="email" id="inputEmail" className="form-control form-control-lg" placeholder="Digite seu email" required autofocus></input>
                        <select class="form-control" id="exampleFormControlSelect1">
                                        <option selected>Escolha o seu sexo</option>
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                        </select>
                        <InputMask mask="99/99/9999" className="form-control" placeholder="Digite sua data de nascimento"></InputMask>
                        <InputMask mask="(99) 9 9999.9999" className="form-control" placeholder="Digite seu telefone celular"></InputMask>
                        <input type="password" id="inputPassword" className="form-control form-control-lg" placeholder="Digite sua senha" required></input>
                        <div className="checkbox mb-3">
                            <input type="checkbox"></input> <small>Concordo com os termos de uso.</small>
                        </div>
                        <Link to="/Home" class="btn btn-primary btn-block" role="button" aria-pressed="true">Cadastrar</Link>
                        
                </form>
              </div>
          </div>
      </div>
        )
    }
}

export default Cadastro;