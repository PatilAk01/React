import React, { Component } from "react";
 class CompanyDetail extends Component{
    render(){
        return <div>
            <h3>-*-*-*--*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*--*--*-*-*-</h3>

            <h4>company name is : {this.props.CompanyName}</h4>
            <p>Emails is :{this.props.Cpemail}, contact hear : {this.props.cpContact}, And address is : {this.props.cpaddress} </p>

        </div>
    }
  
 }
 export default CompanyDetail;