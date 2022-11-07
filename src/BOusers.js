import BackofficeNav from "./BackofficeNav";

export default function BOusers(){
  return(
    <div>
      <div className="boScreen">
        <BackofficeNav />
        <div className="boElement">
          <h1>Utilisateurs</h1>
        </div>
      </div>
    </div>
  )
}