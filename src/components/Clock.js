import React, { Component } from 'react'

export default class Clock extends Component {

    state = {
        hours:'',
        minutes:'',
        seconds:''
    }

  

    Clock = () => {
        let date = new Date;

        let second = date.getSeconds();
        let minute = date.getMinutes();
        let hour = date.getHours();


        

        this.setState({
            hours: hour,
            minutes: minute,
            seconds: second
        })
    }

    render() {

        {setInterval(this.Clock, 1000)}

        return (
            <div style={boxStyle}>
                <div onClick={this.Reload}>{this.state.hours} : {this.state.minutes} : {this.state.seconds}</div>
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

