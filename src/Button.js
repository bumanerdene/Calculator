import React from 'react';
export class Button extends React.Component {
  handleEvent(){
    alert('hi');
  }
  render() {
    return (
      <button onClick={this.handleEvent}>
        Click me! {this.props.name}
      </button>
    );
  }
}
