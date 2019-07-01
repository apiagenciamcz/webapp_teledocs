import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Table, {Thead, Tbody, Tr, Th, Td} from "react-row-select-table";

import './../Styles.css';
import { Link } from 'react-router-dom';

class Visita04 extends Component{
    render(){
        return(
            
            <div className="bg_app">
            <NavBar/>
                <div className="container bg_content">
                    <div className="row">
                        <div className="col-12">
                            <h5>Você poderia especificar algums sintomas?</h5>
                        </div>
                    </div><hr/><br/>
                    <div className="row">
                        <div className="col-12">
                        
                        <Table onCheck={value => console.log(value)} defaultCheckeds={[1,3]} className="checkSintomas">
          <Thead>
            <Tr>
              <Th>SINTOMAS GERAIS</Th>
            </Tr>
          </Thead>
          <Tbody>
          <Tr>
              <Td>dificuldade em dormir</Td>
            </Tr>
            <Tr>
              <Td>fadiga</Td>
            </Tr>
            <Tr>
              <Td>febre</Td>
            </Tr>
            <Tr>
              <Td>perda de apetite</Td>
            </Tr>
            <Tr>
              <Td>mudança de humor</Td>
            </Tr>
          </Tbody>
        </Table>
        <Table onCheck={value => console.log(value)} defaultCheckeds={[1,3]} className="checkSintomas">
          <Thead>
            <Tr>
              <Th>CABEÇA | PESCOÇO</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>dificuldade em dormir</Td>
            </Tr>
            <Tr>
              <Td>fadiga</Td>
            </Tr>
            <Tr>
              <Td>febre</Td>
            </Tr>
            <Tr>
              <Td>perda de apetite</Td>
            </Tr>
            <Tr>
              <Td>mudança de humor</Td>
            </Tr>
          </Tbody>
        </Table>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12"><br/>
                            <p class="text-center">
                                <Link to="/Visita03" class="btn btn-danger" role="button" aria-pressed="true">Voltar</Link>&nbsp;&nbsp;
                                <Link to="/Visita05" class="btn btn-primary" role="button" aria-pressed="true">Avançar</Link>
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}

export default Visita04;