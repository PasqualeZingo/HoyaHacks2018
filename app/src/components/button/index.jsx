import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {

    onClick = (event: object) => {
        if (this.props.type === 'submit') {
            this.props.onSubmit();
        } else {
            this.props.onNewConversation();
        }
    }

    render() {
        return(
            <div className='button-wrapper'>
                <button
                    disabled={this.props.disabled}
                    onClick={this.onClick}
                >
                    {this.props.children}
                </button>
            </div>
        );
    }
}