import React from "react";

export class EnteredData extends React.Component {
    render() {
        const name = this.props.name;
        const contact = this.props.contact;
        const isClicked = this.props.isClicked;

        return (
            isClicked &&
            <div>
                <p>Ваше имя: {name}</p>
                <p>Ваш контакт для связи: {contact}</p>
            </div>
        )
    }
}