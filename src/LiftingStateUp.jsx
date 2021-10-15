import React from 'react';
import './LiftingStateUp.css'

function EnteredData(props) {
    const name = props.name;
    const contact = props.contact;
    const isClicked = props.isClicked;

    return (
        isClicked &&
        <div>
            <p>Ваше имя: {name}</p>
            <p>Ваш контакт для связи: {contact}</p>
        </div>
    )
}

class InfoForm extends React.Component {
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

    handleClick(e) {
        this.props.onClickChange()
    }

    render() {
        const name = this.props.inputName;
        const contact = this.props.inputContact;

        return (
            <div>
                <p>Ваше имя: <input value={name}
                                    onChange={this.handleNameChange} />
                </p>

                <p>Контакт для связи: <input value={contact}
                                             onChange={this.handleContactChange} />
                </p>
                <button type="submit" value="showData" onClick={this.handleClick}>Показать введённые данные</button>
            </div>
        )
    }

}


export class CommonState extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {name: '', contact: '', clicked: false};
    }

    handleNameChange(name) {
        this.setState({name: name})
    }

    handleContactChange(contact) {
        this.setState({contact: contact})
    }

    handleClick() {
        this.setState({clicked: true})
    }

    render() {
        const name = this.state.name;
        const contact = this.state.contact;
        const isClicked = this.state.clicked;

        return (
            <div className="CommonState">
                <InfoForm
                    inputName={name}
                    inputContact={contact}
                    onNameChange={this.handleNameChange}
                    onContactChange={this.handleContactChange}
                    onClickChange={this.handleClick} />
                <EnteredData
                    name={name}
                    contact={contact}
                    isClicked={isClicked}/>
            </div>
        )
    }

}