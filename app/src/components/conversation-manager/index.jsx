import React, { Component } from 'react';
import InputManager from '../input-manager/index';
import Conversation from '../conversation/index';

export default class ConversationManager extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    user: 'computer',
                    text: 'Hello world, I am a computer',
                    time: new Date().toString()
                }
            ]
        };
    }

    createMessage = (user: string, text: string) => {
        let messages = this.state.messages;
        let date = new Date();
        messages.push({
            user: user,
            text: text,
            time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`
        });
        this.setState({
            messages: messages
        });
    } 

    render() {
        return(
            <div className='conversation-manager'>
                <Conversation
                    visible={this.state.messages.length > 0? true : false}
                    messages={this.state.messages}
                    ref={'Conversation'}
                />
                <InputManager
                    createMessage={this.createMessage}
                />
            </div>
        );
    }
}