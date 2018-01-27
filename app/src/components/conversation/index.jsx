import React, { Component } from 'react';
import './conversation.css';

export default class Conversation extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this.refs.MessageWrapper.scrollTop = this.refs.MessageWrapper.scrollHeight;
    }

    render() {
        const visibility = this.props.visible? 'visible' : 'hidden'; 
        return(
            <div
                className='conversation-wrapper'
                style={{ visibility: visibility }}
            >
                <div
                    className='message-wrapper'
                    ref={'MessageWrapper'}>
                    {this.props.messages.map((message, index) => {
                        return (
                            <div
                                className={message.user === 'computer'? 'message-left' : 'message-right'}
                                key={index}
                            >
                                <p>
                                    {message.text}
                                </p>
                                <p className={'date'}>{message.time}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}