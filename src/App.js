import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import About from "./Components/About/About";
import ProductSpe from "./Components/ProductSpeci/ProductSpe";

function App() {

  useEffect(()=>{
    if( JSON.parse(localStorage.getItem("islogg"))==null){
      (localStorage.setItem("isLogg",false ))
    }
  },[])

const [islogg,setLogg]=useState(JSON.parse(localStorage.getItem("isLogg")))


  return (
    <div>
      <BrowserRouter>
      <Navbar islogg={islogg} setLogg={setLogg}/>
      <Routes>
      <Route path="/" element={  <Home/>}  />
      <Route path="product" element={ islogg ? <Product/> : <Navigate to='/'/> }/>
      <Route path="product/:productId" element={islogg ? <ProductSpe/> : <Navigate to='/'/>}/>
      <Route path="about" element={ islogg ? <About/> : <Navigate to='/'/>}/>
      <Route path="*" element={<h2>404! Page not found</h2>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
