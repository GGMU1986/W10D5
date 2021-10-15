import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            date: new Date(),
            // dateString: this.date.toDateString(),
            // hours: this.date.getHours(),
            // minutes: this.date.getMinutes(),
            // seconds: this.date.getSeconds()
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        setInterval(this.tick, 1000);
    }

    tick(){
        this.setState({date: new Date()});
    }

    render() {
        let date = this.state.date.toDateString()
        let hours = this.state.date.getHours()
        let minutes = this.state.date.getMinutes()
        let seconds = this.state.date.getSeconds()

        return (
            <div>
                <h1>GP Clock</h1>
                <h3>{date}</h3>
                <h3>{hours}:{minutes}:{seconds}</h3>
            </div> 
        )
    }
}

export default Clock