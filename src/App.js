import React from "react";
import "./style.css";
import Counter from './components/Counter.js';
import Counter2 from './components/Counter2.js';
import Addition from './components/Addition';
import Parent from "./components/multi/Parent.js";
import Data from './components/task/Data.js';
import Data2 from './components/task/Data2.js'


export default function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      {/* <Addition /> */}
      {/* <Parent/> */}
      {/* <Data /> */}
      <Data2 />
    </div>
  );
}
