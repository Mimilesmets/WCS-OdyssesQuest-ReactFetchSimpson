import React, {Component} from 'react';
import './App.css';
import  GenerateQuote  from  './Component/GenerateQuote';
import  DisplayQuote  from  './Component/DisplayQuote';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // we can set up our sampleEmployee as the default
      // to always display an employee
      quote: []
       
    };
    this.getQuote = this.getQuote.bind(this);
  };

  getQuote() {
    // Employee collection via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response  =>  response.json())
      .then(data  => {
        // Once the data is collected, we update our state with the new data
        console.log(data)
        this.setState({
          quote: data[0]
        });
    });
}

render()
{
  


  return (
    <div className="App">
<GenerateQuote  selectQuote={() => this.getQuote()}  />
<DisplayQuote  quote={this.state.quote}  />
    </div>
  );
  }
}

export  default  App;
