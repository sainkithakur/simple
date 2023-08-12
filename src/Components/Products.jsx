import React, { useEffect, useState } from "react";
import { add } from "../Stores/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchProducts } from "../Stores/productSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);

  const handleAdd = (product) => {
    dispatch(add(product));
  };


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return;
    <h2>Loading....</h2>;
  }
  if (status === STATUSES.ERROR) {
    return;
    <h2> Something went wrong!</h2>;
  }

 return (
    <div>
      <div className="productsWrapper">
        {data.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
