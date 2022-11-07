import BackofficeNav from "./BackofficeNav"


export default function Backoffice(){
  return(
    <div className="boScreen">
      <BackofficeNav />
      <div className="boElement">
        <h1>Mon Site Photos</h1>
      </div>
    </div>
  )
}