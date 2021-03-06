import React, { Component, createRef } from 'react'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.number = React.createRef();
  }

  state = {
    count: 0,
    value: ''
  }

  add = () => {
    const number = this.state.value ? parseInt(this.state.value) : parseInt(this.number.current.value);
    console.log(number)
    this.setState({
      count: this.state.count + number
    })
  }

  reduce = () => {
    const number = this.state.value ? parseInt(this.state.value) : parseInt(this.number.current.value);
    this.setState({
      count: this.state.count - number
    })
  }

  addIfOdd = () => {
    const count = this.state.count
    if (count % 2 === 1) {
      this.add();
    }
  }

  addAsync = () => {
    setTimeout(() => {
      this.add();
    },1000)
  }

  changeValue = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  
  render() {
    const {count, value} = this.state

    return (
      <div className="app">
        <p>click   {count}   times</p>
        <div className="btn-warp">
          <input value={value}  onChange={this.changeValue} />
          <select ref={this.number}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;&nbsp;&nbsp;
          <button onClick={this.add}>加</button>&nbsp;&nbsp;&nbsp;
          <button onClick={this.reduce}>减</button>&nbsp;&nbsp;&nbsp;
          <button onClick={this.addIfOdd}>奇数时才可以加</button>&nbsp;&nbsp;&nbsp;
          <button onClick={this.addAsync}>异步加</button>
        </div>
      </div>
    )
  }
}

