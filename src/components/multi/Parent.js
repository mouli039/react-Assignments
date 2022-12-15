import React from 'react';
import First from './First';
import Second from './Second';

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0,
    };
  }

  // Increment = (e) => {
  //   console.log(e.target.className)
  //   this.setState({
  //       [e.target.id] : Number(e.target.name)+1
  //   })
  // }

  // Decrement = (e) => {
  //   if(Number(e.target.name) > 0){this.setState({
  //     [e.target.id] : Number(e.target.name)-1
  // })}
  // }

  update = (e) => {
    console.log(e.target.name);
    if (e.target.className == 'dec' && Number(e.target.name) > 0) {
      this.setState({
        [e.target.id]: Number(e.target.name) - 1,
      });
    } else if (e.target.className == 'inc') {
      this.setState({
        [e.target.id]: Number(e.target.name) + 1,
      });
    }
  };

  render() {
    const { a, b } = this.state;
    return (
      <>
        <br />
        <h1>Multi component Addition</h1>
        <hr />
        <br />
        <h2>
          {' '}
          A )&emsp;
          <First
            val={a}
            inc={this.Increment}
            dec={this.Decrement}
            up={this.update}
          ></First>{' '}
          :&emsp;{a}
        </h2>
        <h2>
          {' '}
          B )&emsp;
          <Second
            val={b}
            inc={this.Increment}
            dec={this.Decrement}
            up={this.update}
          ></Second>{' '}
          :&emsp;{b}
        </h2>
        <h2>&emsp;&emsp; Sum of A and B&emsp;=&emsp;{a + b}</h2>
      </>
    );
  }
}

export default Parent;
