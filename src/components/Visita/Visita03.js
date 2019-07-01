import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

import './../Styles.css';
import { Link } from 'react-router-dom';
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 1;
const MAX = 30;





class Visita03 extends Component{
    state = {
        values: [1]
      };

    render(){

        return(
            
            <div className="bg_app">
            <NavBar/>
                <div className="container bg_content">
                    <form className="">
                    <div className="row">
                        <div className="col-12">
                        <h5>Há quanto tempo está com o problema?</h5><hr/>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-lg-9 col-md-12 badge1">
                                
                                <span class="badge badge-pill badge-primary float-left badge_time">01</span>
                                <span class="badge badge-pill badge-primary float-right badge_time">30</span>
                                <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "2em"
        }}
      > 
 
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={values => this.setState({ values })}
          renderTrack={({ props, children }) => (
            
            <div
            
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  marginTop:"-15px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "25px",
                width: "25px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  height: "15px",
                  width: "15px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: "10px" }} id="output">
        <span class="badge badge-pill badge-primary float-right badge_time">{this.state.values[0]}</span>
        </output>
      </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <h5>Dias, meses, anos?</h5><br/>
                                <select class="custom-select">
                                    <option selected>Dias</option>
                                    <option>Meses</option>
                                    <option>Anos</option>
                                </select>
                            </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-12">
                            <p class="text-center">
                                <Link to="/Visita02" class="btn btn-danger" role="button" aria-pressed="true">Voltar</Link>&nbsp;&nbsp;
                                <Link to="/Visita04" class="btn btn-primary" role="button" aria-pressed="true">Avançar</Link>
                            </p>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default Visita03;