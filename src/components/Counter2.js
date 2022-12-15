import React from 'react';

class Counter2 extends React.Component{
  constructor(){
    super();
    this.state ={
      a : 0,
      val : 1,
    }
  }
  update = (e) => {
    e.target.name =='inc' ? this.setState({a : this.state.a +this.state.val*1}) : this.state.a > 0 && (this.state.a-this.state.val >= 0)? this.setState({a : this.state.a -this.state.val*1}) : '';
  }
  slider = e => {
    this.setState({
      val : e.target.value
    })
  }
  render(){
   let {a,val} = this.state;
    return (
      <div className = 'counter'>
        <h1>Counter</h1><hr />
      <h1 className='display'>{a}</h1>
      <h3><input type='range' min = '1' max = '10' onChange = {this.slider} value = {val}></input>&emsp;value : {val}</h3>
      <button onClick ={this.update} name = 'inc' >Increment</button>&emsp;
      <button onClick = {this.update} name = 'dec'>Decrement</button>
      </div>
    )
  }
}

export default Counter2;