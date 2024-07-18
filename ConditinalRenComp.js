import React, { Component } from 'react'

export class ConditinalRenComp extends Component {
    constructor(props){
        super(props)

        this.state={
            iscond:true
        }
    }
    render() {
        <h4>-----------------------------------------</h4>
      
/* 
        if(!this.state.iscond){
            return <h2>admin login successfully</h2>
        }
        else{
            return <h2>user login successfully</h2>
        } */
// tenery operator
    /*     return (this.state.iscond)?<h2>admin login</h2>
        :<h2>user login</h2> */
    
        // shock circuit

        return this.state.iscond&&<h3>admin login done</h3>
       
    }
}

export default ConditinalRenComp
