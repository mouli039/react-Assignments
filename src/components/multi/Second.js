import React from 'react';
import Increment from './Increment';
import Decrement from './Decrement';

class Second extends React.Component{
  constructor(){
    super();

  }
  render(){
    const props = this.props;
    return (
      <>
        {/* <button onClick={props.inc} name = {props.val} id = 'b'>Increment</button>&emsp;
        <button onClick ={props.dec} name = {props.val} id = 'b'>Decrement</button> */}
        <button onClick={props.up} name = {props.val} id = 'b' className = 'inc'>Increment</button>&emsp;
        <button onClick ={props.up} name = {props.val} id = 'b' className = 'dec'>Decrement</button>
      </>
    )
  }
}

export default Second;