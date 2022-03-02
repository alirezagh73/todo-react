import React, {Component} from 'react';
import styles from "./assets/styles/Form.module.scss";
import {ToastContainer, toast, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ButtonComponent} from "./Button.component";
import {InputsComponent} from "./Inputs.component";

class FormComponent extends Component {

    state = {
        title: '',
        endDate: '',
        desc: '',
        startDate: null,

    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.title.trim() !== '' && this.state.endDate.trim() !== '' && this.state.desc.trim() !== '') {
            this.state.startDate = new Date().toLocaleDateString();
            this.props.handleSubmit(this.state)
            this.setState({
                title: '',
                endDate: '',
                desc: '',
            })

            toast.success('Your task was created successfully!!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.warn('Please Fill all information!!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className={`${styles.inputs} margin-t-50`}>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    transition={Flip}
                />

                <InputsComponent value={this.state} handleChange={this.handleChange}/>

                <div className={styles.inputs_btn}>
                    <ButtonComponent type='submit' title='Submit'/>
                </div>

            </form>
        );
    }
}

export {
    FormComponent
};