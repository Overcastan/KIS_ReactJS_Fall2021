import React from 'react';
import "./Counter.css"

export  class Counter extends React.Component {

    counter = 20

    constructor(props) {
        super(props);

        this.state = {
            sum: this.props.start,
        }

    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState((prevState) => {
                if (this.counter === 0) {
                    clearInterval(this.timerId)
                } else {
                    this.counter -= 1
                    return {
                        sum: prevState.sum + 1,
                    }
                }

            })
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