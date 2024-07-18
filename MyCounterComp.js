import React, { Component , Fragment} from 'react'

export class MyCounterComp extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
       
    }
    inc(){
        this.setState((prevState)=>({count:prevState.count+1}))
      }
      dec(){
        this.setState((prevState)=>({count:prevState.count-1}))
      }
    render() {
        return (
          
           <Fragment>
                  <h1>--------------------------------------</h1>
              <h1>welcome to my channel</h1>  

              <p>counter value is : <strong>{this.state.count}</strong></p>
              <button type='button' onClick={()=>this.inc()}>count ++</button>
              <button type='button' onClick={()=>this.dec()}>count --</button>
              </Fragment>
        )
    }
}

export default MyCounterComp
