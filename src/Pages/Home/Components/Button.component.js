import React, {Component} from 'react';
import styles from "./assets/styles/Button.module.scss";

class ButtonComponent extends Component {
    render() {
        return (
            <button type={this.props.types}>{this.props.title}</button>
        );
    }
}

export {ButtonComponent};