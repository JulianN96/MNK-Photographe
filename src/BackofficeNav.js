import React from "react"
import {Link} from "react-router-dom"

export default function BackofficeNav(){
  return(
    <div className="backofficeNav">
      <div className="boNavBannerContainer">
        <h1>Backoffice</h1>
        <h3>MNK Photos</h3>
        <h2>Bienvenue Marie!</h2>
      </div>      
      <ul className="backofficeNav__ul">
        
        <li><Link to="/" className="backofficeNav__link">Retour au Site</Link></li>
        <li><Link to="/backoffice/albums" className="backofficeNav__link">Mes Albums</Link></li>
        <li><Link to="/backoffice/bookings" className="backofficeNav__link">Mes Rendez-Vous</Link></li>
        <li><Link to="/backoffice/services" className="backofficeNav__link">Mes Services</Link></li>
        <li><Link to="/backoffice/store" className="backofficeNav__link">E-Commerce</Link></li>
        <li><Link to="/backoffice/users" className="backofficeNav__link">Utilisateurs</Link></li>
        <li><Link to="/backoffice/settings" className="backofficeNav__link">Parametres</Link></li>
      </ul>

    </div>
  )
}