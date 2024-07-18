import React, { Component } from "react";
 class MyEventComp extends component{

    greeting(){
        window.alert("welcome to my channel");
    }
    welcome(std1,std2,std3)
    {
        window.alert(`welcome to ${std1} ,${std2},${std3}`);
    }

    render(){
        return 
        <div>
        <h1>this event</h1>
        <button type="button" onClick={this.greeting()}> check to call greeting</button>
        <h2 onMouseOver={()=>this.welcome("Nishant","Dhiraj","Sujit")}>hover to call </h2>
        </div>
        
    }
 }
 export default MyEventComp;