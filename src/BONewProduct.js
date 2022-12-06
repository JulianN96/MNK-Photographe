import React from "react";
import BackofficeNav from "./BackofficeNav";
import { useState } from "react";

export default function BONewProduct(){
  
  const [formData, setFormData] = React.useState({
    title:"",
    description: "",
    price: 0,
    imageUrl: ""
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
    const jsonFormData = JSON.stringify(formData)

    const requestOptions = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {"Content-Type": "application/json"},
      referrerPolicy: "no-referrer",
      body: jsonFormData
    }
    
    console.log((typeof jsonFormData))

    fetch(url, requestOptions)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.setState({postId: data.id})})
      .catch(error => console.error("Error:", error))
    
  }
  

  return(

    
    <div className="boScreen">
      <BackofficeNav />
      <div className="boElement">

        <form className="BO__newservice__form newProductForm" onSubmit={handleSubmit}>
          <label htmlFor="title">Intitulé du produit</label>
          <input 
            className="BO__newProduct__form-input"
            type="text"
            onChange={handleChange}
            name="title"
            value={formData.title}
            />

          <label htmlFor="description">Details du Produit:</label>

          <input
            className="BO__newProduct__form-input input-paragraph"
            type="text"
            placeholder="Details du Produit"
            onChange={handleChange}
            name="description"
            value={formData.description}
            />

          <label htmlFor="price">Prix du Produit:</label>
          <input 
            className="BO__newProduct__form-input"
            type="number"
            placeholder=""
            onChange={handleChange}
            name="price"
            value={formData.price}
            />

          <label htmlFor="imageUrl">URL Photo</label>
          <input
            className="BO__newProduct__form-input"
            type="text"
            placeholder="http://..."
            onChange={handleChange}
            name="imageUrl"
            value={formData.imageUrl}
            />

          <button className="standardButton">Add new Product</button>
        </form>
      </div>
    </div>
  )
}