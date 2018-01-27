import React, { Component } from 'react';
import './text-input.css';
import autosize from 'autosize';

export default class TextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount(){
        this.textarea.focus();
        autosize(this.textarea);
    }

    handleOnChange = (event: Object) => {
        const value = event.target.value;
        this.setState({ value: value });
        this.props.onChange(value);
        if (value) {
            this.props.onValid(true);
        } else {
            this.props.onValid(false);   
        }
    }

    clearTextArea = () => {
        this.setState({
            value: ''
        });
        this.props.onValid(false);
        this.textarea.value = ''; 
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