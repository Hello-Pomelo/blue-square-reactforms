import React, {Component} from 'react';

export default class FormItemError extends Component
{
    render() {
        const data = this.props.data

        if (!data || !data.errors || !data.errors[this.props.name]) return null

        return (
            <p className="text-danger">{data.errors[this.props.name].error}</p>
        )
    }
}