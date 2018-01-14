import React, { Component } from 'react';
import './App.css';
import './materialize-css/dist/css/materialize.min.css';
class Calculator extends React.Component{
  constructor(props){
super(props);
this.state = {
  show : ''
};
    this.handleClick = this.handleClick.bind(this);
    this.clear = this.clear.bind(this);
    this.calculate = this.calculate.bind(this);
      this.oneClear = this.oneClear.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);

}
handleClick(e){
  const oldShow = this.state.show;
  const newShow = oldShow + e.target.value;
  this.setState({
    show : newShow
  });
}
calculate(){
  const res = this.state.show;
  if(res.startsWith("+") || res.startsWith("-") || res.startsWith("*") || res.startsWith("/") ||  res.startsWith(".")){
    this.setState({
      show : ''
    });
  }
  else {
    const res1= eval(this.state.show);
  this.setState({
    show : res1
  });
}
}
clear(){
  this.setState({
    show : ''
  });
}
oneClear(){
  const original = this.state.show;
  const sliced = original;
  try{

      this.setState({
        show : original.slice(0,original.length-1)
      });
  }
catch(e){
  this.setState({
    show : original
  });

}

}
handleKeyPress = (event) => {
  if(event.key == 'Enter'){
    console.log('enter press here! ')
  }
}
render(){
  return(
    <div class='allBody'  onKeyPress={this.handleKeyPress}>
    <div class='result'>
    <h3>
    {this.state.show}
    </h3>
    </div>
    <div class='bodyCal' onClick={this.handleClick}>
    <input type='button' class="waves-effect waves-light btn-large" value='1'/>
    <input type='button' class="waves-effect waves-light btn-large" value='2' />
    <input type='button' class="waves-effect waves-light btn-large" value='3'/>
    <input type='button' class="waves-effect waves-light btn-large teal lighten-2" value='+'/>
    <input type='button' class="waves-effect waves-light btn-large teal lighten-2 " value='-'/>
    <input type='button' class="waves-effect waves-light btn-large" value='4'/>
    <input type='button' class="waves-effect waves-light btn-large" value='5'/>
    <input type='button' class="waves-effect waves-light btn-large" value='6'/>
    <input type='button' class="waves-effect waves-light btn-large teal lighten-2" value='*'/>
    <input type='button' class="waves-effect waves-light btn-large teal lighten-2" value='/'/>
    <input type='button' class="waves-effect waves-light btn-large" value='7'/>
    <input type='button' class="waves-effect waves-light btn-large" value='8'/>
    <input type='button' class="waves-effect waves-light btn-large" value='9'/>
    <input type='button' class="waves-effect waves-light btn-large teal lighten-2" value='0' />
    <input type='button' class="waves-effect waves-light btn-large teal lighten-2" value='.'/>
    </div>
    <div class='change'>
    <input type='button' value='clear' onClick={this.clear} class="waves-effect waves-light btn-large teal lighten-2" />
    <input type='button' value='<<' onClick={this.oneClear} class="waves-effect waves-light btn-large teal lighten-2"/>
    <input type='submit' value='= ' onClick={this.calculate} class="waves-effect waves-light btn-large red  lighten-2 "/>

    </div>
    </div>
  );
}
}
export default Calculator;
