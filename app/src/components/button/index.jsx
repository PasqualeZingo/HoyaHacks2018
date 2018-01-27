import React, { Component } from 'react';
import './button.css';

export default class SubmitButton extends Component {
    render() {
        console.log(this.props.disable);
        return(
            <div className='button-wrapper'>
                <button disabled={this.props.disabled}>{'Submit'}</button>
            </div>
        );
    }
}