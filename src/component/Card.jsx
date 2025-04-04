import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./Button";

const Card = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data.products))
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products));
  });

  return (
    <div className=" flex gap-3 flex-wrap">
      {products.map((product) => (
        <div key={product.id} className=" w-48 p-2 border-2 h-[450px] relative">
          <img src={product.images} alt="image" className="w-40" />
          <p>Name:{product.title}</p>
          <p>Price: &#8358; {product.price}</p>
          <p>Status: {product.availabilityStatus}</p>
          <p>Category: {product.category} </p>
          <p>Brand: {product.brand}</p>
          <p>Shipping: {product.shippingInformation}</p>
          <button className="bg-green-400 px-6 py-2 rounded-md text-white absolute bottom-3 ">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
