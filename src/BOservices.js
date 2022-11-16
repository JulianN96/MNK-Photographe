import BackofficeNav from "./BackofficeNav";
import servicesdata from "./servicesdata";
import {Link} from "react-router-dom";

export default function BOservices(){

  const servicesArrayParticuliers = []
  const servicesArrayProfessionels = []

  fetch("http://localhost:3002/particuliers")
  .then(res => res.json())
  .then(data => data.map(data => servicesArrayParticuliers.push(data)))

  fetch("http://localhost:3002/professionels")
  .then(res => res.json())
  .then(data => data.map(data => servicesArrayProfessionels.push(data)))

  console.log(servicesArrayParticuliers)
  console.log(servicesArrayProfessionels)

  // Object.keys(servicesdata.particuliers).forEach(function(key, index){
  //   servicesArrayParticuliers.push(servicesdata.particuliers[key])
  // })

  // console.log(servicesArrayParticuliers)

  // Object.keys(servicesdata.professionels).forEach(function(key, index){
  //   servicesArrayProfessionels.push(servicesdata.professionels[key])
  // })

  const servicesParticuliers = servicesArrayParticuliers.map(service =>(
    <div className="services__menu__tile">
      <h3 key={service.id}>
        <Link to={`/services/${service.id}`} className="services__menu__tile-title">{service.title}</Link>
      </h3>
      {/* <img className="services__menu__tile-image" src={service.image} alt="service tile"></img> */}
    </div>
  ))

  const servicesProfessionels = servicesArrayProfessionels.map(service =>(
    <div className="services__menu__tile">
      <h3 key={service.id}>
        <Link to={`/services/${service.id}`} className="services__menu__tile-title">{service.title}</Link>
      </h3>
      {/* <img className="services__menu__tile-image" src={service.image} alt="service tile"></img> */}
    </div>
  ))


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
            {servicesProfessionels}
            <Link to="/backoffice/services/new" className="standardButton">Ajouter un Service</Link>
          </div>
        </div>

        {/* //CREATE
        React form to grab the info
        - Title field
        - Image url field (to be replaced)
        - Description field
        - Time field
        ID to be generated - use nanoid? 
        push info to object array*/}
      </div>
    </div>
  )
}