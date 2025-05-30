import React from "react";
import { useState } from 'react';

function Product() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div className="flex">
    <form onSubmit={handleSubmit}>
      <label className="First">Product description:
      <input className="second"
        type="text" 
        name="product_description" 
        value={inputs.product_description || ""} 
        onChange={handleChange}
      />
      </label>
      <label className="First">Product category:
      <input className="second"
        type="text" 
        name="category" 
        value={inputs.category || ""} 
        onChange={handleChange}
      />
      </label>
      <label className="First">Product Quantity:
      <input className="second"
        type="number" 
        name="quantity" 
        value={inputs.quantity|| ""} 
        onChange={handleChange}
      />
      </label>
      <label className="First">Thumbnail:
      <input className="second"
        type="text" 
        name="thumbnail" 
        value={inputs.thumbnail|| ""} 
        onChange={handleChange}
      />
      </label>
      <label className="First">Product Name:
      <input className="second"
        type="text" 
        name="product_name" 
        value={inputs.product_name || ""} 
        onChange={handleChange}
      />
      </label>
        <input className="button" type="submit" />
    </form>
    </div>
  )
}

export default Product;