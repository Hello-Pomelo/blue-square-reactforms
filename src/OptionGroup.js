import React, {Component} from 'react';
import {FormConsumer} from './FormContext';
import FormItemError from "./FormItemError";

const OptionGroupContext = React.createContext({});

export class OptionGroupConsumer extends Component
{
    render()
    {
        return (
            <OptionGroupContext.Consumer>
                {(props) => this.props.children(props)}
            </OptionGroupContext.Consumer>
        )
    }
}

export default class OptionGroup extends Component
{
    render()
    {
        return (
            <FormConsumer>
                {(data) => this.renderOptionGroup(data)}
            </FormConsumer>
        )
    }

    renderOptionGroup(data)
    {
        const props = {...this.props}
        return (
            <div className="form-group">
                {this.renderLabel()}
                <select {...this.props.data} {...props} onChange={(e) => this._onChange(e)}>
                    {this.renderChildren()}
                </select>
                <FormItemError name={this.props.name} data={data} />
            </div>
        )
    }

    _onChange = (e) => {
        if (this.props.multiple) {
            let value = []
            const options = e.target.options;
            for (let i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            this.props.onChangeValue(value)
        }
        else {
            this.props.onChangeValue(e.target.value)
        }
    }

    renderLabel()
    {
        if (!this.props.label) return null

        return (
            <label htmlFor={this.props.id}>{this.props.label}</label>
        )
    }

    renderChildren()
    {
        return (
            <OptionGroupContext.Provider value={{}}>
                {this.props.children}
            </OptionGroupContext.Provider>
        )
    }
}

OptionGroup.defaultProps = {
    name: 'select',
    className: 'form-control',
    onChangeValue: (value) => {}
}