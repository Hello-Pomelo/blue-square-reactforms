import React, {Component} from 'react';
import {FormConsumer} from "./FormContext";
import FormItemError from "./FormItemError";

export default class CheckBox extends Component
{
    render()
    {
        return (
            <FormConsumer>
                {(data) => this.renderCheckBox(data)}
            </FormConsumer>
        )
    }

    renderCheckBox(data)
    {
        let props = {...this.props}
        if (props.children) delete props.children
        if (props.onChangeValue) delete props.onChangeValue
        return (
            <div className="form-check">
                <input
                    type="checkbox"
                    checked={this.props.value}
                    onChange={(e) => this.props.onChangeValue(e.target.checked)}
                    {...props} />
                {this.renderLabel(data)}
                <FormItemError name={this.props.name} data={data} />
            </div>
        )
    }

    renderLabel(data)
    {
        if (this.props.children.length) {
            return (
                <label className="form-check-label" htmlFor={this.props.id}>{this.props.children}</label>
            )
        }
    }
}

CheckBox.defaultProps = {
    name: 'checkbox',
    id: 'checkbox',
    className: 'form-check-input',
    onChangeValue: (checked) => {}
}