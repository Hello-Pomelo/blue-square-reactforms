import React, {Component} from 'react';
import {FormConsumer} from "./FormContext";
import FormItemError from "./FormItemError";

export default class DatePicker extends Component
{
    render()
    {
        return (
            <FormConsumer>
                {(data) => this.renderDatePicker(data)}
            </FormConsumer>
        )
    }

    renderDatePicker(data)
    {
        let props = {...this.props}
        if (props.children) delete props.children
        if (props.onChangeValue) delete props.onChangeValue
        return (
            <div className="form-group">
                {this.renderLabel(data)}
                <input onChange={(e) => this.props.onChangeValue(e.target.value)} {...props} />
                <p className="text-muted">DatePicker {this.props.type}</p>
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

DatePicker.defaultProps = {
    name: 'input',
    id: 'input',
    className: 'form-control',
    type: 'datetime-local',
    onChangeValue: (text) => {}
}
