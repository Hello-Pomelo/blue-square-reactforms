import React, {Component} from 'react';
import {OptionGroupConsumer} from "./OptionGroup";

export default class Option extends Component
{
    render()
    {
        return (
            <OptionGroupConsumer>
                {(data) => this.renderOption(data)}
            </OptionGroupConsumer>
        )
    }

    renderOption(data)
    {
        let props = {...this.props}

        return (
            <option {...props}>{this.props.children}</option>
        )
    }
}

Option.defaultProps = {
    value: 'option'
}