import React, { Component } from 'react';
import HOC from './HOC';

export class MySalaryComp1 extends Component {
    render() {
        return (
            <div>
                <p>Your salary is : <strong>{this.props.salary}</strong></p>
                <button type='button' onClick={this.props.inc}>Increase Salary</button>
            </div>
        );
    }
}

export default HOC(MySalaryComp1);
