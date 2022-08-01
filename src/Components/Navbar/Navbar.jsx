import React from 'react'
import styles from './styles.module.css'

import { Link } from 'react-router-dom'


function Navbar({islogg,setLogg}) {

    function RenderButton(){

        if(islogg == true){
            return <button style={{backgroundColor:"red"}} 
            onClick={()=>{
                console.log("false")
                localStorage.setItem("isLogg",false);
                setLogg(JSON.parse(localStorage.getItem("isLogg")))}}>Logout</button>
        }else{
            return <button style={{backgroundColor:"green"}}
             onClick={()=>{

                localStorage.setItem("isLogg",true);
                setLogg(JSON.parse(localStorage.getItem("isLogg")))}}>Login</button>
        }
        
    }
    


  return (
    <div>
    <header className={styles.header}>
 
   
    <Link to='/'> Home </Link>
    <Link to='product'> Product </Link>
    <Link to='about'> About </Link>
    
    <RenderButton/>
      </header>
    </div>
  )
}

export default Navbar
