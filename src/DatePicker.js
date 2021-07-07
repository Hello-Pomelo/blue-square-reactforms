import React, {Component} from 'react';
import moment from 'moment';
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
        const value = this.props.value
        let props = {...this.props}
        if (props.children) delete props.children
        if (props.value) delete props.value
        if (props.onChangeValue) delete props.onChangeValue
        return (
            <div className="form-group">
                {this.renderLabel(data)}
                <input
                  value={this.parseValue(value)}
                  onChange={(e) => this.props.onChangeValue(moment(e.target.value))} {...props} />
                <p className="text-muted">DatePicker {this.props.type}</p>
                <FormItemError name={this.props.name} data={data} />
            </div>
        )
    }

    parseValue(value)
    {
        if (this.props.type == 'date') return moment(value).format('YYYY-MM-DD')
        if (this.props.type == 'time') return moment(value).format('HH:mm:ss')
        return moment(value).format('YYYY-MM-DDTHH:mm')
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
    value: null,
    onChangeValue: (text) => {}
}
