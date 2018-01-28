import React, { Component } from 'react';
import TextInput from '../text-input/index';
import Button from '../button/index';
import firebase from '../../firebase';
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
    }

    handleOnSubmit = (event: object) =>{
        if (this.state.isValid) {
            this.props.createMessage('UserName', this.state.text, new Date());
            this.refs.TextInput.clearTextArea();
        }
    }

    handleOnNewConversation = () => {
        firebase.database().ref('Users/UserName/conversation/').remove();
        this.props.onResetConversation();
    }

    render() {
        return (
            <div style={{ display: 'grid' }}>
                <TextInput
                    placeholder={'Enter your thoughts...'}
                    onValid={this.handleValidate}
                    onChange={this.handleOnTextChange}
                    clearTextArea={this.handleClearTextArea}
                    ref={'TextInput'}
                />
                <div className='buttons-wrapper' style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexAlign: 'center',
                    margin: '0 auto'
                    }}>
                    <Button
                        disabled={!this.state.isValid}
                        onSubmit={this.handleOnSubmit}
                        type={'submit'}
                    >
                        {'Submit'}
                    </Button>
                    <Button
                        onNewConversation={this.handleOnNewConversation}
                        type={'new_conversation'}
                    >
                        {'New Conversation'}
                    </Button>
                </div>
            </div>
        );
    }
}