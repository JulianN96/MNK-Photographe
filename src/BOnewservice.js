import BackofficeNav from "./BackofficeNav";
import React from "react"
import datatest from "./datatest";

export default function BOnewservice(){


  fetch("http://localhost:3002/particuliers")
    .then(res => res.json())
    .then(data => console.log(data))

  const [formData, setFormData] = React.useState({
    serviceType: "",
    serviceName: "",
    serviceDescription:"",
    serviceTime: "",
    serviceImage:""
  })

  function handleChange(event){
    const {name, value, type} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }))

  }
  
  function handleSubmit(event){
    let newService = {}
    let newProService = {}
    event.preventDefault()

    if (formData.serviceType === "Particuliers"){
      newService = {
        id: "testid",
        title: formData.serviceName,
        image: formData.serviceImage,
        time: formData.serviceTime
      }

      datatest.particuliers.push(newService)
    } 
    else if (formData.serviceType === "Professionels"){
      newProService = {
        id: "testid",
        title: formData.serviceName,
        image: formData.serviceImage,
        time: formData.serviceTime
      }
      datatest.professionels.push(newProService)
    }

    console.log(datatest.professionels)

  }

  return(
    <div className="boScreen">
      <BackofficeNav />
      <div className="boElement">
        <h1>Nouveau Service</h1>
        <form className= "BO__newservice__form"onSubmit={handleSubmit}>

        <label for="serviceType">Type de Service:</label>
          <select
          className="BO__newservice__form-input"
          name = "serviceType" 
          onChange={handleChange}>
            <option selected disabled>Choisir</option>
            <option 
              value="Particuliers" 
             
              >
                Particuliers
            </option>
            <option 
              value="Professionels" 
              
              onChange={handleChange}>
                Professionels
            </option>
          </select>

          <label for="serviceName">Intitulé du service:</label>
          <input 
            className="BO__newservice__form-input"
            type="text"
            placeholder="Intitulé du service"
            onChange={handleChange}
            name="serviceName"
            value={formData.serviceName}
          />

          <label for="serviceName">Details du service:</label>
          <input 
            className="BO__newservice__form-input input-paragraph"
            type="text"
            placeholder="Details du service"
            onChange={handleChange}
            name="serviceDescription"
            value={formData.serviceDescription}
          />

          <label for="serviceTime">Temps approx d'une Seance:</label>
          <input 
            className="BO__newservice__form-input"
            type="text"
            placeholder=""
            onChange={handleChange}
            name="serviceTime"
            value={formData.serviceTime}
          />

          <label for="serviceImage">Choisir une Image:</label>
          <input 
            className="BO__newservice__form-input"
            type="url"
            placeholder=""
            onChange={handleChange}
            name="serviceImage"
            value={formData.serviceImage}></input>

          <label for="serviceImageFile">Choisir une image:</label>
          <input className="BO__newservice__form-input" type="file" id="serviceImageFile" name="serviceImageFile"></input>

          <button className="standardButton">Ajouter Nouveau Service</button>
          
        </form>
      </div>
    </div>
  )
}