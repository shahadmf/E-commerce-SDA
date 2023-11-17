import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:3003/products");
    setProducts(data.payload);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`http://localhost:3003/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>
      <div>
        {products.length > 0 &&
          products.map((product: Product) => (
            <div className="card">
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
              <button
                onClick={() => {
                  handleDelete(product.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
