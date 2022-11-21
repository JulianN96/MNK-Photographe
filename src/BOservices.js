import BackofficeNav from "./BackofficeNav";
import servicesdata from "./servicesdata";
import React from "react";
import {Link} from "react-router-dom";

export default function BOservices(){

  const servicesArrayParticuliers = []
  let servicesArrayProfessionels = []

  const [serviceProfessionels, setServiceProfessionels] = React.useState([""])

function renderProfessionels(){
  fetch("http://localhost:3002/professionels")
  .then(res => res.json())
  .then(data => {
    console.log(data.length)
    for (let i = 0; i < data.length; i++){
      console.log(data[i])
      servicesArrayProfessionels.push(data[i])
    }

    setServiceProfessionels(servicesArrayProfessionels.map(service =>
      <div className="services__menu__tile">
        <h3 key={service.id}>
          <Link to={`/services/${service.id}`} className="services__menu__tile-title">{service.title}</Link>
        </h3>
      </div>
      ))

      console.log(serviceProfessionels)
      return serviceProfessionels
  })
}

  // console.log(serviceProfessionels)



// async function getProServices(data){




//       }
      
  



  // console.log(getProServices())
    // data.map(data => servicesArrayProfessionels.push(data)))
  // console.log(serviceProfessionels)
  // console.log(servicesArrayParticuliers)
  

  Object.keys(servicesdata.particuliers).forEach(function(key, index){
    servicesArrayParticuliers.push(servicesdata.particuliers[key])
  })


  // Object.keys(servicesdata.professionels).forEach(function(key, index){
  //   servicesArrayProfessionels.push(servicesdata.professionels[key])
  // })

  const servicesParticuliers = servicesArrayParticuliers.map(service =>(
    <div className="services__menu__tile">
      <h3 key={service.id}>
        <Link to={`/services/${service.id}`} className="services__menu__tile-title">{service.title}</Link>
      </h3>
    </div>
  ))

  // const servicesProfessionels = servicesArrayProfessionels.map(service =>(
  //   <div className="services__menu__tile">
  //     <h3 key={service.id}>
  //       <Link to={`/services/${service.id}`} className="services__menu__tile-title">{service.title}</Link>
  //     </h3>
  //   </div>
  // ))


  return(
    <div>
      <div className="boScreen">
        <BackofficeNav />
        <div className="boElement">

          <h1>Mes Services</h1>

          <div className="boServices__particuliers">
            <h2>Particuliers</h2>
            {servicesParticuliers}
            <Link to="/backoffice/services/new" className="standardButton">Ajouter un Service</Link>
          </div>

          <div className="boServices__professionels">
            <h2>Professionels</h2>
            {renderProfessionels()}
            <Link to="/backoffice/services/new" className="standardButton">Ajouter un Service</Link>
          </div>
        </div>

      </div>
    </div>
  )

}