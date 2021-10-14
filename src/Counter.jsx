import React from 'react';
import "./Counter.css"

export  class Counter extends React.Component {

    counter = 10

    constructor(props) {
        super(props);

        this.state = {
            sum: this.props.start,
        }

    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            if (this.counter === 0) {
                clearInterval(this.timerId)
            } else {
                this.counter -= 1
                this.setState((prevState) => {
                    return {
                        sum: prevState.sum + 1,
                    }
                })
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="Counter">
                <h2>This is {this.props.counterNumber} counter!</h2>
                <h1>{this.state.sum}</h1>
            </div>
        );
    }
}