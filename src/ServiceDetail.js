import React from "react"
import { useParams } from "react-router";
import {Link} from "react-router-dom"
import servicesdata from "./servicesdata";

export default function ServiceDetail(props) {
  const {serviceId} = useParams()
  
  const servicesArray = []

  Object.keys(servicesdata.particuliers).forEach(function(key, index){
    servicesArray.push(servicesdata.particuliers[key])
  })

  Object.keys(servicesdata.professionels).forEach(function(key, index){
    servicesArray.push(servicesdata.professionels[key])
  })

  const thisService = servicesArray.find(service => service.id === serviceId)

  return (
    <div className="serviceDetail__background">
      <div className="serviceDetail__modal">
        <div className="serviceDetail__screen">
          <div className="services__menu__banner">
            <div className="services__banner-text">
              <h3 >Mon service de:</h3>
              <h1 className="serviceDetail__title">{thisService.title}</h1>
            </div>
          </div>
          <div className ="serviceDetail__content">
            <img className="serviceDetail__image" src={thisService.image}></img>
            <div className="serviceDetail__content-text">
              <p>
                {thisService.description}
              </p>
              {thisService.time &&<p>Temps d'une Seance Approximative: {thisService.time}</p>}
            </div>
          </div>

        </div>
        <Link className="standardButton servicesReturn__button" to="/services"> Retour au Services</Link>
      </div>
    </div>
  )
}
