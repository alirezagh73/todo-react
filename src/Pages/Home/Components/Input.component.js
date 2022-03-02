import React, {Component} from 'react';
import './assets/styles/Input.module.scss'

class InputComponent extends Component {



    render() {
        return (
            <label htmlFor={this.props.name}>{this.props.name} :
                <input  className=' padding-horizontal-15 margin-t-10 margin-b-20'
                       type={this.props.type} placeholder={this.props.placeholder} name={this.props.name}
                       id={this.props.name} onChange={(e) => this.props.handleChange(e)}
                       value={this.props.value}/>
            </label>
        );
    }
}

export {InputComponent};