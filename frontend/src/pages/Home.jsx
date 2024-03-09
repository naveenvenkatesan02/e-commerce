import React, { useEffect, useState } from "react";
import HomeNav from "../components/HomeNav";
import Card from "../components/Card";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);
  return (
    <div>
      <HomeNav />
      <div className="sm:flex-col md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-4 ">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
