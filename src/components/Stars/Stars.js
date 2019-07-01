import React, { Component } from 'react';
import './Stars.css';




class Stars extends Component{


    render(){
        return(
            
          <div class="rating">
          <input type="radio" id="star5" name="rating" value="5" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"/><label for="star5" title="05 Estrelas">5 stars</label>
          <input type="radio" id="star4" name="rating" value="4" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample"/><label for="star4" title="04 Estrelas">4 stars</label>
          <input type="radio" id="star3" name="rating" value="3" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample"/><label for="star3" title="03 Estrelas">3 stars</label>
          <input type="radio" id="star2" name="rating" value="2" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample"/><label for="star2" title="02 Estrelas">2 stars</label>
          <input type="radio" id="star1" name="rating" value="1" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample"/><label for="star1" title="01 Estrela">1 star</label>
          
         </div>
         
            
        )
    }
}


export default Stars;