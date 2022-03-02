import React, {Component} from 'react';
import {InputComponent} from "./Input.component";

class InputsComponent extends Component {
    render() {
        return (
            <>
                <InputComponent value={this.props.value.title} handleChange={this.props.handleChange} name='title' type='text'
                                placeholder='Title...'/>
                <InputComponent value={this.props.value.endDate} handleChange={this.props.handleChange} name='endDate'
                                type='date'/>
                <InputComponent value={this.props.value.desc} handleChange={this.props.handleChange} name='desc' type='text'
                                placeholder='Description...'/>
            </>
        );
    }
}

export {InputsComponent};