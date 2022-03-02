import React, {Component} from 'react';
import styles from "./assets/styles/Conditions.Column.module.scss";
import {ConditionsColumnCardComponent} from "./Conditions.Column.Card.component";

class ConditionalColumnComponent extends Component {
    render() {
        return (
            <div className={`${styles.Conditions_column} margin-vertical-30`}>

                <h2 className={styles.Conditions_column_header}>
                    {this.props.header}
                </h2>

                <ConditionsColumnCardComponent handleGoToDone={this.props.handleGoToDone} handleDelete={this.props.handleDelete} handleGoToDoing={this.props.handleGoToDoing} name={this.props.name} task={this.props.task}/>
            </div>

        );
    }
}

export {ConditionalColumnComponent};