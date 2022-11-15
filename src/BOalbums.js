import BackofficeNav from "./BackofficeNav";

export default function BOalbums(){
  return(
    <div>
      <div className="boScreen">
        <BackofficeNav />
        <div className="boElement">
          <h1>Mes Albums Photos</h1>
          <h3>Gestion des photos sur site ici</h3>
        </div>
      </div>
    </div>
  )
}