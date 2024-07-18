import React, { Component } from 'react'

const HOC = (WrapperComponent) => {
class hoccomp extends Component{
    constructor(props){
        super(props)
        this.state={
            salary:190000
        }
        
    }
    inc=()=>{
        this.setState((prevState)=>({salary:prevState.salary+10000}))
      }
render(){
    return <WrapperComponent salary={this.state.salary} inc={this.inc}{...this.props}></WrapperComponent>
    
}
}
    return hoccomp
}

export default HOC
