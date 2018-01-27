import React, { Component } from 'react';
import TextInput from '../text-input/index';
import SubmitButton from '../button/index';
export default class InputManager extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isValid: false,
            text: ''
        }
    }
    
    handleValidate = (isValid: boolean) =>{
        this.setState({
            isValid: isValid
        });
    }

    handleOnTextChange = (text: string) => {
        this.setState({
            text: text
        });
        console.log(text);
    }

    render() {
        return (
            <div>
                <TextInput
                    placeholder={'Enter your thoughts...'}
                    onValid={this.handleValidate}
                    onChange={this.handleOnTextChange}
                />
                <SubmitButton disabled={!this.state.isValid}/>
            </div>
        );
    }
}