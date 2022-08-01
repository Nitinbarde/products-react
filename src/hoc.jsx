import { Component } from "react"

export const hoc = (Component)=>{
    function EnhaceComponent(){
      return  <div style={{backgroundColor:"red"}}> <Component val={500} /> </div>
    }
     return EnhaceComponent;
}


