import React, { Component } from "react";
import { Link } from 'react-router-dom';


import './../Styles.css';

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link to="/Home" className="navbar-brand">TeleDocs</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse txt_navbar" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li class="nav-item">
                                    <Link to="/Consultas" className="nav-link">SUAS CONSULTAS</Link>
                            </li>
                            <li class="nav-item">
                                    <Link to="/Pagamento" className="nav-link">MEIOS DE PAGAMENTO</Link>
                            </li>

                            <li class="nav-item">
                                    <Link to="/Cupons" className="nav-link">MEUS CUPONS</Link>
                            </li>
                            
                            <li class="nav-item">
                                    <Link to="/Faq" className="nav-link">FAQ</Link>
                            </li>
                            <li class="nav-item">
                                    <Link to="/Profile" className="nav-link">PROFILE</Link>
                            </li>
                            <li class="nav-item">
                                    <Link to="/Contatos" className="nav-link">CONTATE-NOS</Link>
                            </li>
                            <li class="nav-item">
                                    <Link to="/" className="nav-link">SAIR</Link>
                            </li>
                         </ul>

                        
               </div>
            </nav>
        )
    }
}

export default NavBar;