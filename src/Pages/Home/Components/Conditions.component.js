import React, {Component} from 'react';
import {ConditionalColumnComponent} from "./Conditional.Column.component";
import styles from "./assets/styles/Conditions.module.scss";

class ConditionsComponent extends Component {
    render() {

        return (
            <section className={`${styles.Conditions} margin-t-50 padding-t-50`}>

                <ConditionalColumnComponent handleGoToDone={this.props.handleGoToDone}
                                            handleGoToDoing={this.props.handleGoToDoing}
                                            handleDelete={this.props.handleDelete} name='todo'
                                            task={this.props.conditions.todo}
                                            header='TODO'/>
                <ConditionalColumnComponent handleGoToDone={this.props.handleGoToDone}
                                            handleGoToDoing={this.props.handleGoToDoing}
                                            handleDelete={this.props.handleDelete} name='doing'
                                            task={this.props.conditions.doing}
                                            header='DOING'/>
                <ConditionalColumnComponent handleGoToDone={this.props.handleGoToDone}
                                            handleGoToDoing={this.props.handleGoToDoing}
                                            handleDelete={this.props.handleDelete} name='done'
                                            task={this.props.conditions.done}
                                            header='DONE'/>

            </section>

        );
    }
}

export {ConditionsComponent};