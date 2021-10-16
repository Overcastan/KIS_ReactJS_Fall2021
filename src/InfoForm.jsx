import React from "react";

export class InfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        this.props.onNameChange(e.target.value);
    }

    handleContactChange(e) {
        this.props.onContactChange(e.target.value);
    }

    handleClick() {
        this.props.onClickChange()
    }

    render() {
        const name = this.props.inputName;
        const contact = this.props.inputContact;

        return (
            <div>
                <p>Ваше имя: <input value={name} onChange={this.handleNameChange} placeholder="Биба Бобович"/></p>
                <p>Контакт для связи: <input value={contact} onChange={this.handleContactChange} placeholder="Катод"/></p>
                <button type="submit" value="showData" onClick={this.handleClick}>Показать введённые данные</button>
            </div>
        )
    }

}