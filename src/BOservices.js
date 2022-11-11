import BackofficeNav from "./BackofficeNav";

export default function BOservices(){
  return(
    <div>
      <div className="boScreen">
        <BackofficeNav />
        <div className="boElement">
          <h1>Mes Services</h1>
        </div>
      </div>
    </div>
  )
}