import BackofficeNav from "./BackofficeNav";

export default function BOClients(){
  return(
    <div className="boScreen">
      <BackofficeNav />
      <div className="boElement">
        <h1>Mes Clients</h1>
        <h3>Gestion du portefeille client ici</h3>
      </div>
    </div>
  )
}