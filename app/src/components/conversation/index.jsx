import React, { Component } from 'react';
import './conversation.css';

export default class Conversation extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    user: 'computer',
                    text: 'Hello world, I am a computer'
                },
                {
                    user: 'Me',
                    text: 'Hello world, I am a person'
                }
            ]
        };
    }

    render() {
        return(
            <div className='conversation-wrapper'>
                <div className='message-wrapper'>
                    <p className='message-left'>
                        {'message here message here message here message here message here'}
                    </p>
                    <p className='message-right'>
                        {'message here message here message here message here message here'}
                    </p>
                </div>
            </div>
        );
    }
}