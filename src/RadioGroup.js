import React, {Component} from 'react';
import {FormConsumer} from './FormContext';
import FormItemError from "./FormItemError";

const RadioGroupContext = React.createContext({});

export class RadioGroupConsumer extends Component
{
    render()
    {
        return (
            <RadioGroupContext.Consumer>
                {(props) => this.props.children(props)}
            </RadioGroupContext.Consumer>
        )
    }
}

export default class RadioGroup extends Component
{
    render()
    {
        return (
            <FormConsumer>
                {(data) => this.renderRadioGroup(data)}
            </FormConsumer>
        )
    }

    renderRadioGroup(data)
    {
        return (
            <div className="form-options mb-3">
                {this.renderLabel()}
                {this.renderChildren()}
                <FormItemError name={this.props.name} data={data} />
            </div>
        )
    }

    renderLabel()
    {
        if (!this.props.label) return null

        return (
            <p className="mb-0 mt-2">{this.props.label}</p>
        )
    }

    renderChildren()
    {
        return (
            <RadioGroupContext.Provider value={{
                onChangeValue: (value) => this.props.onChangeValue(value),
                value: this.props.value
            }}>
                {this.props.children}
            </RadioGroupContext.Provider>
        )
    }
}

RadioGroup.defaultProps = {
    name: 'radio',
    onChangeValue: (value) => {}
}