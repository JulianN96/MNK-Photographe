import BackofficeNav from "./BackofficeNav";

export default function BObookings(){
  return(
    <div className="boScreen">
      <BackofficeNav />
      <div className="boElement">
        <h1>Mes Rendez-Vous</h1>
        <h3>Gestion des Seances photos avec RDV en ligne ici</h3>
      </div>
    </div>
  )
}