import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        counter: 0
      }
    
      counterUp = () =>{
        let countPlus = this.state.counter+1
        this.setState({
          counter: countPlus
        })
      }
    
      counterDown = () =>{
        let countMinus = this.state.counter-1
        if(countMinus <= 0){
          countMinus = 0
        }
        this.setState({
          counter: countMinus
        })
      }

    render() {
        return (
            <div style={boxStyle}>
                <div>counter {this.state.counter}</div>
                <button onClick={this.counterUp}>+</button>
                <button onClick={this.counterDown}>-</button>
            </div>
        )
    }
}

const boxStyle = {
    color: 'white',
    backgroundColor: '#991815',
    width: '5em',
    padding: '3em',
    display:'inline-block',
    marginTop:'5em'
}
