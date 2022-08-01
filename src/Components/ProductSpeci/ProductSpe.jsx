import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import styles from './styles.module.css'


function ProductSpe() {

    const [productDetail,setProductDetail] = useState({})

let params = useParams();

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${params.productId}`)
        .then((res)=>{
            setProductDetail(res.data)
            
        })
        .catch((err)=>{console.log(err)})

    },[])
  return (
    <>
        <h1>Porduct Specification</h1>
        <div className={styles.productSpe}>
        <img  className={styles.productImgee}
            src= {productDetail.thumbnail}
           
        />
         <h2>{productDetail.title}</h2>
         <p>{productDetail.description}</p>
         <p>{productDetail.brand}</p>
         <p>{productDetail.price}</p>
         <p>{productDetail.rating}</p>
         <p>{productDetail.stock}</p>
         <p>{productDetail.category}</p>
         </div>
    </>
  )
}

export default ProductSpe
