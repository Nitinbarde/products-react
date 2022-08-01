import React from "react";
import style from "./style.module.css"



export default function ProductCard({item}) {
  return (
    <div className={style.productCard}>
 <img src={item.thumbnail} alt="productImg" className={style.productImg}/>
 <p><b>{item.title}</b></p>
 <p> {item.description} </p>
 <p><b>Price:</b> ${item.price} </p>
 <p><b>Rating:</b>{item.rating}/5</p>


 </div>
  )
}
