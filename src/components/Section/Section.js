import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Section extends Component {
    static propTypes = {
        title: propTypes.string.isRequired
    };
    render() {
        const title = this.props.title;
        return <section>
            <h2>{title}</h2>
            {this.props.render()}
        </section>
    }
}
