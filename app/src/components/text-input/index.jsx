import React, { Component } from 'react';
import './text-input.css';
import autosize from 'autosize';

export default class TextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            height: '3em'
        }
    }

    componentDidMount(){
        this.textarea.focus();
        autosize(this.textarea);
    }

    handleOnChange = (event) => {
        const value = event.target.value;
        this.setState({ value: value });
        console.log(value);
    }

    render(){
        return(
            <div className="text-input">
                <textarea
                    ref={(el)=>this.textarea=el}
                    type="text"
                    id="input1"
                    placeholder={this.props.placeholder}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}