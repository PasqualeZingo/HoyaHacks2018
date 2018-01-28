import React, { Component } from 'react';
import InputManager from '../input-manager/index';
import Conversation from '../conversation/index';
import request from 'request';
import firebase from '../../firebase';

export default class ConversationManager extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        const conRef = firebase.database().ref('Users/UserName/conversation/messages/');
        conRef.on('value', function(snap) {
            const messagesObject = snap.val();
            const keys = Object.keys(messagesObject);
            let messages = this.state.messages;
            keys.forEach((key) => {
                messages.push(messagesObject[key]);
            });
            this.setState({
                messages: messages
            });
        }.bind(this));
    }

    createMessage = (user: string, text: string) => {
        const date = new Date();
        const message = {
            user: user,
            text: text,
            time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`
        }
        this.handleOnSubmit(message);
    } 

    handleOnSubmit = (message: object) => {
        var options = 
        { 
            method: 'POST',
            url: 'https://us-central1-hoyahacks2018.cloudfunctions.net/app/message',
            headers: 
            { 
                'Content-Type': 'application/json'
            },
            body: message,
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
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
