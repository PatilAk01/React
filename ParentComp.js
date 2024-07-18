import React, { Component } from 'react'

class ParentComp extends Component {
 constructor(props){
    super(props)
    this.state={
        empName:"Sharukh",
        empsal:120320
    }
 }
   render (){
    const{empName,empsal}= this.state;
        return (
            <div>
                 <p>My Name is :{empName} , and salary is:{empsal}</p>
                
            </div>
        )
    }
}
export default ParentComp;
