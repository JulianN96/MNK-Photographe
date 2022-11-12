import BackofficeNav from "./BackofficeNav";
import React from "react"

export default function BOnewservice(){

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
      return: {
        prevFormData,
        [name]: value
    }
    }))
  }
  
  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
    //submition to object goes here
  }

  return(
    <div className="boScreen">
      <BackofficeNav />
      <div className="boElement">
        <h1>Nouveau Service</h1>
        <form className= "BO__newservice__form"onSubmit={handleSubmit}>

        <label for="serviceType">Type de Service:</label>
          <select
          className="BO__newservice__form-input">
            <option selected disabled>Choisir</option>
            <option 
              value="Particuliers" 
              name="serviceType" 
              onChange={handleChange}>
                Particuliers
            </option>
            <option 
              value="Professionels" 
              name="serviceType" 
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