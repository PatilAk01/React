import React, { Component } from 'react';
import HOC from './HOC';

export class MySalaryComp2 extends Component {
    render() {
        return (
            <div>
                <h5>============================================================</h5>
                <p>Your salary is : <strong>{this.props.salary}</strong></p>
                <h2 onMouseOver={this.props.inc}>Increase Salary</h2>
            </div>
        );
    }
}

export default HOC(MySalaryComp2);
