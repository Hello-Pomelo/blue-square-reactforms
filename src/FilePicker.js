import React, {Component} from 'react';
import {FormConsumer} from "./FormContext";
import FormItemError from "./FormItemError";

export default class FilePicker extends Component
{
    render()
    {
        return (
          <FormConsumer>
              {(data) => this.renderFilePicker(data)}
          </FormConsumer>
        )
    }

    renderFilePicker(data)
    {
        const value = this.props.value
        let props = {...this.props}
        if (props.children) delete props.children
        if (props.onChangeValue) delete props.onChangeValue
        if (!(typeof props.value instanceof File)) delete props.value
        return (
          <div className="form-group">
              {this.renderLabel(data)}
              <input
                type="file"
                onChange={(e) => this.props.onChangeValue(e.target.value)} {...props} />
              {this.renderValue(value)}
              <FormItemError name={this.props.name} data={data} />
          </div>
        )
    }

    renderValue(value)
    {
        if (value instanceof File)
            return <p className="text-muted">{value.name} {this.renderDeleteButton()}</p>

        if (value !== null)
            return <p className="text-muted">{value} {this.renderDeleteButton()}</p>

        return null
    }

    renderDeleteButton()
    {
        return (
          <i className="fa fa-trash" onClick={() => {
              this.props.onChangeValue(null)
          }}/>
        );
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

FilePicker.defaultProps = {
    name: 'file-picker',
    id: 'file-picker',
    className: 'form-control',
    value: null,
    onChangeValue: (file) => {}
}
