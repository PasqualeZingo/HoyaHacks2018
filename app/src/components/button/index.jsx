import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {

    onClick = (event: object) => {
        this.props.onSubmit();
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