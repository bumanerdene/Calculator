import React from 'react';

export class Child extends React.Component{
  constructor(){
    super();
     this.handleClick = this.handleClick.bind(this)
     this.state= {
     value:0
   }
   };

  handleClick(e){
    const val = e.target.value;
    val = val +  {this.state.value};
    this.setState({
       value: val
    });
  }

  render(){
    return(
      <div>
        <h1>
        Click the Button {this.state.value}!
       </h1>

       <button id="first" onClick={this.handleClick} value="1">Clicked 1</button>
       <button id="second" onClick={this.handleClick} value="2">Clicked 2</button>
       <button id="third" onClick={this.handleClick} value="3">Clicked 3</button>

      </div>
    );
}
}
