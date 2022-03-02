import React, {Component} from 'react';
import {FormComponent} from "./Components/Form.component";
import {ConditionsComponent} from "./Components/Conditions.component";
import Swal from 'sweetalert2';


class HomePage extends Component {

    state = {
        todo: [],
        doing: [],
        done: [],
    }

    handleSubmit = (data) => {

        this.setState((prevState) => {
            return {
                todo: [...prevState.todo, data],
            }
        })

    }


    componentDidUpdate(prevProps, prevState) {

        localStorage.setItem('TODO', JSON.stringify(this.state))

    }

    handleDelete = (target, index) => {

// use Sweet Alert2 Package
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                this.setState((prevState) => {
                    console.log(this.state[target.id])
                    prevState[target.id].splice(index, 1)
                    return {
                        [target.id]: [...this.state[target.id]]
                    }
                })
            }
        })


    }

    handleGoToDoing = (target, index) => {
        this.setState((prevState) => {
            let newTask = prevState[target.id].splice(index, 1)
            {
                return {
                    doing: [...prevState.doing, ...newTask]
                }
            }
        })
    }

    handleGoToDone = (target, index) => {
        this.setState((prevState) => {
            let newTask = prevState[target.id].splice(index, 1)
            {
                return {
                    done: [...prevState.done, ...newTask]
                }
            }
        })
    }


    componentDidMount() {
        let tasks = localStorage.getItem("TODO");
        if (tasks !== null) {
            tasks = JSON.parse(tasks)
            console.log("did mount")
            this.setState((prevState) => {
                return {
                    todo: [...tasks.todo],
                    doing: [...tasks.doing],
                    done: [...tasks.done]
                }
            })
        }
    }


    render() {

        return (
            <>
                <div className="container">

                    <FormComponent handleSubmit={this.handleSubmit}/>
                    <ConditionsComponent handleGoToDone={this.handleGoToDone}
                                         handleDelete={this.handleDelete}
                                         handleGoToDoing={this.handleGoToDoing}
                                         conditions={this.state}/>
                </div>
            </>
        );
    }
}

export {HomePage};