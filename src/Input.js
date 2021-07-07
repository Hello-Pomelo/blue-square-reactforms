import React, {Component} from 'react';
import {FormConsumer} from "./FormContext";
import FormItemError from "./FormItemError";

export default class Input extends Component
{
    render()
    {
        return (
            <FormConsumer>
                {(data) => this.renderInput(data)}
            </FormConsumer>
        )
    }

    renderInput(data)
    {
        let props = {...this.props}
        if (props.children) delete props.children
        if (props.onChangeValue) delete props.onChangeValue
        return (
            <div className="form-group">
                {this.renderLabel(data)}
                <input onChange={(e) => this.props.onChangeValue(e.target.value)} {...props} />
                <FormItemError name={this.props.name} data={data} />
            </div>
        )
    }

    renderLabel(data)
    {
        if (this.props.label) {
            return (
                <label htmlFor={this.props.id}>{this.props.label}</label>
            )
        }
    }
}

Input.defaultProps = {
    name: 'input',
    id: 'input',
    className: 'form-control',
    type: 'text',
    onChangeValue: (text) => {}
}