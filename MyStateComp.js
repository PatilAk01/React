import React, { Component } from "react";

class MyStateComp extends Component{
      constructor(){
        super   ();
        this.state={
            empName:"Narkhede Akshay",
            empsal:"10 lakh "
        }
       // setInterval()
       setTimeout(() => {
        this.setState({empName:"Akshay Narkhede" ,empsal:this.state.empsal+10000})
       }, 4000);
      }

    
    render(){
   const {empName,empsal}= this.state;
        return <div>
    
        <h3>======================================================</h3>
          <h2>its MyStateComp</h2>
         {/*  <h4> Employee Name is :<strong>{this.state.empName}</strong></h4>
          <h4> My salary is : <strong>{this.state.empsal}</strong></h4> */}

            <h4> Employee Name is :<strong>{empName}</strong></h4>
          <h4> My salary is : <strong>{empsal}</strong></h4>
          <h4> Name is : {this.props.company}, and address is : {this.props.address}</h4>

        </div>
}}

export default MyStateComp;