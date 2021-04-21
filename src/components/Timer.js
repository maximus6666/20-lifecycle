import React from 'react';
import "./style.css";

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.button = React.createRef();

        this.state = {
            time: props.time,
            id:0,
            paused: true,
            step: props.step || 1000,
            onTick: props.onTick || (()=> {return}),
        }

    }

    getTimeString = () => {
        let min = Math.floor((this.state.time / 1000) / 60);
        let sec = Math.floor((this.state.time / 1000) % 60);

        if (min < 10 ) {
            min = "0" + min;
        }

        if (sec < 10) {
            sec = "0" + sec;
        }

        return `${min}:${sec}`;
    }

    startTimer = () => {
        if (this.state.paused) {
            const id = setInterval(() => {
                const updatedTime = this.state.time - this.state.step;
                this.state.onTick(updatedTime)
                this.setState({
                    time: updatedTime});
    
                if (this.state.time === 0) {
                    clearInterval(id);
                    this.setState({paused: true});
                };
            }, this.state.step);

            this.setState({
                time: this.props.time,
                id: id,
                paused: false
            })
        }else {
            clearInterval(this.state.id);
            this.setState({paused: true})
        }
    }

    componentDidMount() {
        let {autostart} = this.props;
               
        if (autostart === true) {
            this.startTimer();
        }
    }

    render() {
        const buttonLabel = this.state.paused ? "Start" : "Pause";
        const timeString = this.getTimeString();
        const styleWidth = `${(this.state.time * 100) / this.props.time}%`;

        return (
            <div className="wrapper">
                <button className="button" ref={this.button} onClick={this.startTimer}>{buttonLabel}</button> 
                <div>{timeString}</div>
                <div style={{width: styleWidth}} className="line"></div>
            </div>
        )
    }
}
