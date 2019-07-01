import React, { Component } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Cadastro from './components/Cadastro/Cadastro';
import Consultas from './components/Consultas/Consultas';
import Pagamento from './components/Pagamento/Pagamento';
import Cupons from './components/Cupons/Cupons';
import Faq from './components/Faq/Faq';
import Contatos from './components/Contatos/Contatos';
import Profile from './components/Profile/Profile';

import Visita01 from './components/Visita/Visita01';
import Visita02 from './components/Visita/Visita02';
import Visita03 from './components/Visita/Visita03';
import Visita04 from './components/Visita/Visita04';
import Visita05 from './components/Visita/Visita05';
import Visita06 from './components/Visita/Visita06';
import Visita07 from './components/Visita/Visita07';
import Visita08 from './components/Visita/Visita08';
import Visita09 from './components/Visita/Visita09';
import Stars from './components/Stars/Stars';



import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    document.title = 'TeleDocs'
    return (

      <Switch>
          <Route path="/" exact component= {Login}/>
          <Route path="/Home" component= {Home}/>
          <Route path="/Consultas" component= {Consultas}/>
          <Route path="/Pagamento" component= {Pagamento}/>
          <Route path="/Cupons" component= {Cupons}/>
          <Route path="/Faq" component= {Faq}/>
          <Route path="/Contatos" component= {Contatos}/>
          <Route path="/Profile" component= {Profile}/>
          <Route path="/Cadastro" component= {Cadastro}/>

          <Route path="/Visita01" component= {Visita01}/>
          <Route path="/Visita02" component= {Visita02}/>
          <Route path="/Visita03" component= {Visita03}/>
          <Route path="/Visita04" component= {Visita04}/>
          <Route path="/Visita05" component= {Visita05}/>
          <Route path="/Visita06" component= {Visita06}/>
          <Route path="/Visita07" component= {Visita07}/>
          <Route path="/Visita08" component= {Visita08}/>
          <Route path="/Visita09" component= {Visita09}/>
          <Route path="/Stars" component= {Stars}/>

      </Switch>

      
    );
  }
}

export default App;

