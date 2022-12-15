import React from 'react';

class Addition extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0,
    };
  }

  update = (e) => {
    e.target.name == 'inc'
      ? this.setState({ [e.target.id]: Number(e.target.value) })
      : e.target.value >= 0
      ? this.setState({ [e.target.id]: Number(e.target.value) })
      : '';
  };

  render() {
    const { a } = this.state;
    const { b } = this.state;
    return (
      <>
        <h1>Single Component Addition</h1><hr/>
        <br />
        <span>A) &emsp;</span>
        <button onClick={this.update} name="inc" id="a" value={a + 1}>
          Increment
        </button>
        &emsp;
        <button onClick={this.update} name="dec" id="a" value={a - 1}>
          Decrement
        </button>{' '}
        :&emsp;
        <span>{a}</span>
        <br />
        <br />
        <span>B) &emsp;</span>
        <button onClick={this.update} name="inc" id="b" value={b + 1}>
          Increment
        </button>
        &emsp;
        <button onClick={this.update} name="dec" id="b" value={b - 1}>
          Decrement
        </button>{' '}
        :&emsp;
        <span>{b}</span>
        <br />
        <h2>&emsp; Sum of A and B =&emsp;{a + b}</h2>
      </>
    );
  }
}

export default Addition;
