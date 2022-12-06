import React from "react"
import { useEffect, useState } from "react";
import BackofficeNav from "./BackofficeNav";
import { Link } from "react-router-dom";


const ProductList = (props) => {
  
  console.log(props)
  const product = props;
  console.log(product)
  return (
    <div className ="service__preview-container services__menu__tile">
      <h3 key={product.product.id}>{product.product.title}        
      </h3>

    </div>
  )
}

export default function BOProductCatalogue(){
  const [services, setServices] = useState([])

  useEffect(()=>{
    const url ="http://localhost:3002/api/products"

    const fetchData = async () => {
      try{
        const response = await fetch(url);
        const data = await response.json();
        const results = data;

        console.log(data)

        setServices(results)
      } catch (error){
        console.log("error fetching services list", error)
      }
      


    }
    fetchData()
  }, [])

  return (
    <div>
      <BackofficeNav />
      <div>
      {services.map((service) => (
        <ProductList 
          key= {service.id}
          service = {service}
        />
      ))}
      <Link className="buttonStandard" to="/backoffice/store/catalogue/new">New Product TEST</Link>
      </div>
    </div>
  )
  
  
}