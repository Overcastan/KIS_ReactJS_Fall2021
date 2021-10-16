import React from 'react';
import './MainForm.css';
import {InfoForm} from './InfoForm';
import {EnteredData} from "./EnteredData";


export class MainForm extends React.Component {
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
                    onClickChange={this.handleClick}/>
                <EnteredData
                    name={name}
                    contact={contact}
                    isClicked={isClicked}/>
            </div>
        )
    }

}