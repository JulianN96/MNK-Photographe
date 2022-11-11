import React from "react"
import servicesdata from "./servicesdata";
import {Link} from "react-router-dom"

export default function ServicesList() {

  const servicesArray = []

  Object.keys(servicesdata.particuliers).forEach(function(key, index){
    servicesArray.push(servicesdata.particuliers[key])
  })

  Object.keys(servicesdata.professionels).forEach(function(key, index){
    servicesArray.push(servicesdata.professionels[key])
  })

  const services = servicesArray.map(service =>(
    <div className="services__menu__tile">
      <h3 key={service.id}>
        <Link to={`/services/${service.id}`} className="services__menu__tile-title">{service.title}</Link>
      </h3>
      <img className="services__menu__tile-image" src={service.image} alt="service tile"></img>
    </div>
  ))

  return (
  <div className="services__menu">
    <div className="services__menu__banner">
      <h1 className ="services__menu__title">Mes Services</h1>
      <Link className="standardButton services__menu__returnButton" to="/">Retour au Site</Link>
    </div>

    <div className="services__menu__tile-container">
      {services}
    </div>
  </div>
  )
}
