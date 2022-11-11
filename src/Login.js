import React from "react"
import {Link} from "react-router-dom"


export default function Login(){



  const [formData, setFormData] = React.useState({
    userId: "",
    password: ""
  })

  function handleChange(event){
    const {name, value} = event.target
    setFormData(prevData => ({
      return: {
        ...prevData,
        [name]: value
      }
    
     }))
  }

  function handleSubmit(event){
    event.preventDefault()
  }

  return(
    <div className="loginScreen">
        <div class="login__container">
        <h2 className="login__title">Connexion</h2>
        
        <form classname = "login__form" onSubmit={handleSubmit}>
          <input
            className="login__userId"
            onChange={handleChange}
            type= "text"
            placeholder= "Utilisateur"
            name="userId"
            value={formData.userId}
            />

          <input
            className="login__password"
            onChange={handleChange}
            type= "password"
            placeholder= "MDP"
            name="password"
            value={formData.password}
            />

          {/* <button className="login__button">Connexion</button> */}

        </form>
        <Link to="/backoffice" className="standardButton login__button">Connexion</Link>
        <Link to="/" className="standardButton login__button">Retour au Site</Link>
        </div>
    </div>
  )
}