import React, {Component} from 'react';

export default class Submit extends Component {
    render() {
        return (
            <button type="submit" {...this.props}>{this.props.children}</button>
        )
    }
}

Submit.defaultProps = {
    className: 'btn btn-primary'
}