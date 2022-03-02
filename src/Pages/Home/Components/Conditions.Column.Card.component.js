import React, {Component} from 'react';
import {MdDone, MdDoneAll, MdRemove} from "react-icons/md";
import styles from "./assets/styles/Conditions.Column.Card.module.scss";

class ConditionsColumnCardComponent extends Component {
    render() {

        const allData = this.props.task !== [] ? this.props.task.map((data, index) => {
            return (
                <div key={index} className={`${styles.Conditions_column_card}  padding-horizontal-15  `}>
                    <h3 className={`${styles.Conditions_column_card_title} padding-vertical-20`}>
                        {data.title}
                    </h3>
                    <div className={`${styles.Conditions_column_card_body} padding-vertical-10`}>
                        <p className='margin-b-20'>
                            <span>Start Date:</span><span> {data.startDate}</span>
                        </p>
                        <p className='margin-b-20'>
                            <span>Desc :</span><span> {data.desc}</span>
                        </p>
                        <p className='margin-b-10'>
                            <span>End Date : </span><span> {data.endDate}</span>
                        </p>
                    </div>
                    <div className={`${styles.Conditions_column_card_btn} padding-b-10`}>
                        <button onClick={(event) => this.props.handleDelete(event.currentTarget, index)}
                                id={this.props.name}
                                className='margin-horizontal-5 '>
                            <MdRemove/>
                        </button>
                        <button onClick={(event) => this.props.handleGoToDoing(event.currentTarget, index)}
                                id={this.props.name} className='margin-horizontal-5'>
                            <MdDone/>
                        </button>
                        <button onClick={(event) => this.props.handleGoToDone(event.currentTarget, index)}
                                id={this.props.name}
                                className='margin-horizontal-5'>
                            <MdDoneAll/>
                        </button>
                    </div>
                </div>
            )
        }) : null
        return (
            <>
                {allData}
            </>
        );
    }
}

export {ConditionsColumnCardComponent};