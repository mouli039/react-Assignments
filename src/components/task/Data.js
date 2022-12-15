import React from "react";

class Data extends React.Component{
  constructor(){
    super();
    this.state = {
      name : "", 
      age : "",
      search : '',
      emps : [
        {
          name : "mouli",
          age : "22"
        }
      ]
    }
  }
  add = () => {
    if((this.state.name).trim() == ""){
      alert("Please enter the valid name")
    }
    else if((this.state.age).trim() == ""){
      alert("Please enter the valid age")
    }
    else{
      this.setState({
        emps : [
          ...this.state.emps,
          {
            name : this.state.name,
            age : this.state.age
          }
        ],
        name : "",
        age  : ""
      })
    }
  }
  update = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  remove = e => {
    this.setState({
      emps : this.state.emps.filter(a => e.target.value != a.name ? a : '')
    }) 
  }
  find = () => {
    this.setState({
      emps : this.state.emps.filter(a => a.name == this.state.search? a:''),
      search : ''
    })
  }

  render(){
    return(
      <div>
        <table>
          <tr>
            <th>Please enter the Name :</th>
            <th><input type="text" onChange = {this.update} value = {this.state.name} name = "name" /></th>
          </tr>
          <tr>
            <th>Please enter the Age :</th>
            <th><input type="number" onChange = {this.update} value = {this.state.age} name = "age" /></th>
          </tr>
          <tr><button onClick={this.add}>Add employ</button></tr><br/>
          <tr>
            <th><button onClick= {this.find}>Search Employee</button> :</th>
            <td><input type="text" onChange= {this.update} name = 'search' value = {this.state.search}></input></td>
          </tr>
        </table>
        <hr/>
        <table border="1">
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
          {
            this.state.emps.map((ele,ind) => {
              return(
                <tr>
                  <td>{ind+1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.age}</td>
                  <td><button onClick= {this.remove} value = {ele.name}>Remove</button></td>
                </tr>
              )
            })
          }
        </table>
      </div>
    )
  }
}

export default Data;