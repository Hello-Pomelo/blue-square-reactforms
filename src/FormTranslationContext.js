import React, { Component } from 'react'

const FormTranslationContext = React.createContext({
	renderText: (text) => (text)
});

export default FormTranslationContext

export class FormTranslationConsumer extends Component
{
    render()
    {
        return (
            <FormTranslationContext.Consumer>
                {(props) => this.props.children(props)}
            </FormTranslationContext.Consumer>
        )
    }
}