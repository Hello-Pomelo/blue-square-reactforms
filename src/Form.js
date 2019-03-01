import React, {Component} from 'react';
import FormContext from './FormContext';
import {toast} from 'react-toastify';

export default class Form extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }

        this.displayError = true
        this.handleError(props)
    }

    componentWillReceiveProps(props)
    {
        this.handleError(props)
        this.setState({
            data: props.data
        })
    }

    handleError(props)
    {
        if (props.data && props.data.error && props.toast && this.displayError == true) {
            toast.error(props.data.error)
            this.displayError = false
        }
    }

    render()
    {
        return (
            <FormContext.Provider value={this.state.data}>
                <form onSubmit={this._onSubmit}>
                    {this.renderError()}
                    {this.props.children}
                </form>
            </FormContext.Provider>
        )
    }

    _onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit()
        this.displayError = true
        return false;
    }

    renderError()
    {
        if (this.state.data && this.state.data.error && !this.props.toast)
        {
            return (
                <p className="alert alert-danger">{this.state.data.error}</p>
            )
        }

        return null
    }
}

Form.defaultProps = {
    data: null,
    toast: false,
    onSubmit: () => {
        console.log('[Form] submitted')
    }
}