import React, {Component} from 'react';
import {FormConsumer} from "./FormContext";
import FormItemError from "./FormItemError";

export default class TextArea extends Component
{
    render()
    {
        return (
            <FormConsumer>
                {(data) => this.renderTextArea(data)}
            </FormConsumer>
        )
    }

    renderTextArea(data)
    {
        let props = {...this.props}
        if (props.onChangeValue) delete props.onChangeValue
        return (
            <div className="form-group">
                {this.renderLabel(data)}
                <textarea onChange={(e) => this.props.onChangeValue(e.target.value)} {...props} />
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

TextArea.defaultProps = {
    name: 'textarea',
    id: 'textarea',
    className: 'form-control',
    onChangeValue: (text) => {}
}