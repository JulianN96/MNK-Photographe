import BackofficeNav from "./BackofficeNav";

export default function BOstore(){
  return(
    <div className="boScreen">
      <BackofficeNav />
      <div className="boElement">
        <h1 className="boElement__title">Mon E-Commerce</h1>
        <div className="store__container">
        <div className="orders">
          <h3 className="boElement__subtitle">Mes Commandes</h3>
          <div className="orders__list-preview"></div>
        </div>
        <div className="orders">
          <h3 className="boElement__subtitle">Mes Categories</h3>
          <div className="store-categories-preview">
            <ul className="store-categories-preview_ul">
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      

    </div>
  )
}