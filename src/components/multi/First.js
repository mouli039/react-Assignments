import React from 'react';
import Increment from './Increment';
import Decrement from './Decrement';

class First extends React.Component{
  constructor(){
    super();

  }
  render(){
    let props = this.props;
    return (
      <>
        {/* <button onClick={props.inc} name = {props.val} id = 'a' className = 'inc'>Increment</button>&emsp;
        <button onClick ={props.dec} name = {props.val} id = 'a' className = 'dec'>Decrement</button> */}
        <button onClick={props.up} name = {props.val} id = 'a' className = 'inc'>Increment</button>&emsp;
        <button onClick ={props.up} name = {props.val} id = 'a' className = 'dec'>Decrement</button>
      </>
    )
  }
}

export default First;