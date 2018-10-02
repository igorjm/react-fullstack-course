import React, { Component } from 'react';
import styles from './signin.css'

import FormField from '../widgets/FormFields/formFields'

class SignIn extends Component {

    state = {
        registerError: '',
        loading: false,
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your e-mail'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true,
                    password: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm = (element) => {
        const newFormData = {
            ...this.state.formdata
        }

        const newElement = {
            ...newFormData[element.id]
        }

        newElement.value = element.event.target.value

        if(element.blur) {
            let validData = this.validate(newElement)
            newElement.valid = validData[0]
            newElement.validationMessage = validData[1]
        }

        newElement.touched = element.blur
        newFormData[element.id] = newElement

        this.setState({
            formdata: newFormData
        })
    }

    validate = (element) => {
        let error = [true, '']

        if(element.validation.email) {
            const valid = /\S+@\S+\.\S+/.test(element.value)
            const message = `${!valid ? 'This field must be a valid e-mail!' : ''}`
            error = !valid ? [valid, message] : error
        }

        if(element.validation.password) {
            const valid = element.value.length >= 5
            const message = `${!valid ? 'This field must be greater than 5!' : ''}`
            error = !valid ? [valid, message] : error
        }

        if(element.validation.required) {
            const valid = element.value.trim() !== ''
            const message = `${!valid ? 'This field is required!' : ''}`
            error = !valid ? [valid, message] : error
        }

        return error
    }

    submitForm = (event, type) => {
        event.preventDefault()

        if(type !== null) {
            let dataToSubmit = {}
            let formIsValid = true

            for(let key in this.state.formdata) {
                dataToSubmit[key] = this.state.formdata[key].value
            }

            for(let key in this.state.formdata) {
                formIsValid = this.state.formdata[key].valid && formIsValid
            }

            if(formIsValid) {
                this.setState({
                    loading: true,
                    registerError: ''
                })
                
                if(type) {

                } else {

                }
            }
        }

    }

    submitButton = () => (
        this.state.loading ?
            'loading...'
        :
            <div>
                <button onClick={(event) => this.submitForm(event, false)}>Register</button>
                <button onClick={(event) => this.submitForm(event, true)}>Log in</button>
            </div>
    )

    render() {
        return (
            <div className={styles.logContainer}>
                <form onSubmit={(event) => this.submitForm(event, null)}>
                    <h2>Register / Log in</h2>
                    <FormField
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element) => this.updateForm(element)}
                    />

                    <FormField
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element) => this.updateForm(element)}
                    />

                    {this.submitButton()}

                </form>
            </div>
        )
    }
}

export default SignIn;