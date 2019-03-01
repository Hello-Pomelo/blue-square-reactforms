import React, { Component } from 'react'

const FormContext = React.createContext({ data: null });

export default FormContext

export class FormConsumer extends Component
{
    render()
    {
        return (
            <FormContext.Consumer>
                {(props) => this.props.children(props)}
            </FormContext.Consumer>
        )
    }
}