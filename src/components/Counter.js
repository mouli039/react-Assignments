import React from 'react';

class Counter extends React.Component{
  constructor(){
    super();
    this.state ={
      a : 0,
    }
  }
  update = (e) => {
    e.target.name =='inc' ? this.setState({a : this.state.a +1}) : this.state.a>0? this.setState({a : this.state.a -1}) : '';
  }
  render(){
   const {a} = this.state;
    return (
      <div className = 'counter'>
        <h1>Counter</h1><hr />
      <h1 className='display'>{a}</h1>
      <br/>&nbsp;
      <button onClick ={this.update} name = 'inc' >Increment</button>&emsp;
      <button onClick = {this.update} name = 'dec'>Decrement</button>
      </div>
    )
  }
}

export default Counter;