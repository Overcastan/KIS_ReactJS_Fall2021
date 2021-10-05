import React from 'react';

const counterStyle = {
    border: "1px",
    borderStyle: "solid",
    borderColor: "green",
    textAlign: "center",
    margin: "auto",
    display: "block",
    width: "400px"
}

export  class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sum: 0,
            counter: 10
        }

    }

    componentDidMount() {
        this.setState((prevState) => {
            return {
                sum: prevState.sum + this.props.start
            }
        })
        this.timerId = setInterval(() => {
            this.setState((prevState) => {
                if (prevState.counter === 0) {
                    return {
                        sum: prevState.sum,
                    }
                } else {
                    return {
                        sum: prevState.sum + 1,
                        counter: prevState.counter - 1
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
            <div style={counterStyle}>
                <h2>This is {this.props.counterNumber} counter!</h2>
                <h1>{this.state.sum}</h1>
            </div>
        );
    }
}