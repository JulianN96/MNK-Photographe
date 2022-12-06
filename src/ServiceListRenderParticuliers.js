import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"

//Service Preview Generator

const ServiceList = (props) => {
  
  console.log(props)
  const service = props;
  console.log(service)
  return (
    <div className ="service__preview-container services__menu__tile">
      <h3 key={service.service.id}>{service.service.title}        
      </h3>

    </div>
  )
}

export default function ServiceListRenderParticuliers(){
  const [services, setServices] = useState([])

  useEffect(()=>{
    const url ="http://localhost:3002/particuliers"

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
      {services.map((service) => (
        <ServiceList 
          key= {service.id}
          service = {service}
        />
      ))}
    </div>
  )
}