import React, {Component} from 'react';
import {FormTranslationConsumer} from './FormTranslationContext'

export default class FormItemError extends Component
{
    render() {
        const data = this.props.data

        if (!data || !data.errors || !data.errors[this.props.name]) return null

        return (
        	<FormTranslationConsumer>
            	{(translator) => this.renderError(data, translator)}
            </FormTranslationConsumer>
        )
    }

    renderError(data, translator)
    {
    	return <p className="text-danger">{translator.handleText(data.errors[this.props.name].error)}</p>
    }
}