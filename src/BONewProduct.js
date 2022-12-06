import React from "react";
import BackofficeNav from "./BackofficeNav";
import { useState } from "react";

export default function BONewProduct(){
  
  const [formData, setFormData] = React.useState({
    title:"",
    productDescription: "",
    productPrice: 0,
    productImageUrl: ""
  })

  function handleChange(event){
    const {name, value, type} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  function handleSubmit(event){
    let newProduct = {}
    event.preventDefault()
    console.log(formData)
    const url ="http://localhost:3002/api/products"

    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    }

    console.log(requestOptions)

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => this.setState({postId: data.id}))
  }
  

  return(

    
    <div className="boScreen">
      <BackofficeNav />
      <div className="boElement">

        <form className="BO__newservice__form newProductForm" onSubmit={handleSubmit}>
          <label for="title">Intitulé du produit</label>
          <input 
            className="BO__newProduct__form-input"
            type="text"
            onChange={handleChange}
            name="title"
            value={formData.title}
            />

          <label for="productDescription">Details du Produit:</label>

          <input
            className="BO__newProduct__form-input input-paragraph"
            type="text"
            placeholder="Details du Produit"
            onChange={handleChange}
            name="productDescription"
            value={formData.productDescription}
            />

          <label for="productPrice">Prix du Produit:</label>
          <input 
            className="BO__newProduct__form-input"
            type="number"
            placeholder=""
            onChange={handleChange}
            name="productPrice"
            value={formData.productPrice}
            />

          <label for="productImageUrl">URL Photo</label>
          <input
            className="BO__newProduct__form-input"
            type="text"
            placeholder="http://..."
            onChange={handleChange}
            name="productImageUrl"
            value={formData.productImageUrl}
            />

          <button className="standardButton">Add new Product</button>
        </form>
      </div>
    </div>
  )
}