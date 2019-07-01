import React, { Component } from 'react';
import logow from './../../images/LogoW.png';
import logob from './../../images/LogoB.jpg';
import slide01 from './../../images/slider01.jpg';
import slide02 from './../../images/slider02.jpg';
import slide03 from './../../images/slider03.png';

import './Login.css';
import { Link } from 'react-router-dom';
import { FacebookLoginButton } from "react-social-login-buttons";

class Login extends Component {
  render() {
    return (
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
                          <img src={slide01} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                          <img src={slide02} class="w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                          <img src={slide03} className="w-100" alt="..."/>
                        </div>
                      </div>
                      <img src={logob} alt="logo" className="logo_home"/>
                      
                      <div className="txt_description">Inovações digitais de saúde estão mudando nossas vidas para melhor. O TeleDocs é 
                        uma solução inovadora de atendimento virtual ajudará a resolver muitos dos desafios 
                        na atenção primária e atender às necessidades de pacientes, médicos, planos de saúde 
                        e empregadores.</div>
                      
                </div>
              </div>
              <div className="col-lg-6 col-md-12 form_login">
                <form className="form-signin-login">
                  <img src={logow} alt="logo" className="center-block logow"/><br/>
                  <div class="btnface">
                  <FacebookLoginButton className="btn_facebook"><span className="text-center txtface">Login com Facebook</span></FacebookLoginButton><br/>
                  </div>
                  
                  <p class="text-center">Ou use seu email.</p>
                  <label for="inputEmail" className="sr-only">Endereço de Email</label>
                  <input type="email" id="inputEmail" className="form-control form-control-lg" placeholder="Digite seu email" required autofocus></input>
                  <label for="inputPassword" className="sr-only">Password</label>
                  <input type="password" id="inputPassword" className="form-control form-control-lg" placeholder="Digite sua senha" required></input>
                  <div className="checkbox mb-3">
                      <input type="checkbox"></input> <span>Relembrar-me</span>
                  </div>
                  <Link to="/Home" class="btn btn-primary btn-block btn_login" role="button" aria-pressed="true">Entrar</Link>
                  <span className="txt_cadastro">Ainda não tem conta? <Link to="/Cadastro"><b>Cadastre-se</b></Link></span><br/><br/>
                  <span>&copy; 2019</span>
                  <div>
  
  </div>
                  
                </form>
                
              </div>
          </div>
      </div>
    );
  }
}

export default Login;
