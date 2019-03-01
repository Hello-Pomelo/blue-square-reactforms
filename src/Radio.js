import React, {Component} from 'react';
import {RadioGroupConsumer} from "./RadioGroup";

export default class Radio extends Component
{
    render()
    {
        return (
            <RadioGroupConsumer>
                {(data) => this.renderRadio(data)}
            </RadioGroupConsumer>
        )
    }

    renderRadio(data)
    {
        let props = {...this.props}
        if (props.children) delete props.children

        return (
            <div className="form-check">
                <input
                    type="radio"
                    checked={data.value === this.props.value}
                    onChange={(e) => {
                        if (e.target.checked)
                            data.onChangeValue(this.props.value)
                    }}
                    {...props} />
                {this.renderLabel(data)}
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

Radio.defaultProps = {
    value: 'option',
    className: 'form-check-input'
}