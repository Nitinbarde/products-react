import React from "react";

export const Greet = ({massage,name})=>{
    return <h1>   {name}  {massage}</h1>
}

 export const About = ()=>{
    return <h1>Hey! I am using Whats App</h1>
}

const Home = ()=>{
return <h3>We are learning emport and export</h3>
}

export default Home;