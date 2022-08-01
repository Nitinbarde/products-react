import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function Product() {

let navaigate = useNavigate();

  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data.products);
      })
      // .then(res=>{console.log(res)})
      .catch((err) => console.log(err));

    // fetch("https://dummyjson.com/products").then(res=>res.json())
    // .then(res=>{setProduct(res.data.products)})
  }, []);

  return (
    <div>
      {/* {JSON.stringify(product)} */}

      <div className={styles.productWrapper}>
        {products.map((product, i) => {
          return (
            <div className={styles.productCard} onClick={()=> navaigate(`/product/${product.id}`)} >
              <img className={styles.productImg} src={product.thumbnail} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <p>{product.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
