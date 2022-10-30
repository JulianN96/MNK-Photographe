import Playingcard from "./Playingcard"

export default function Homepage(){

  const serviceImages = [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1588979355313-6711a095465f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80",
    "https://images.unsplash.com/photo-1544784179-ae1535e9f013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
    "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  ]

  const servicesLittleImages = [
    "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  ]

  const servicesProImages = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    "https://images.unsplash.com/photo-1620519185537-4e18c939713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80",
    "https://plus.unsplash.com/premium_photo-1664199486592-559b2efb0f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1587614298171-a223667e51c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"   
  ]

  return(
    <div className="homepage">

      <script src="https://kit.fontawesome.com/d07c4d8f71.js" crossorigin="anonymous"></script>

      <div className="section section__hero">
        <h1>MNK Photographe</h1>
      </div>

      <div className="section section__about" id="about">
          <h2 className="section__title">A propos de Moi</h2>
      </div>

      <div className="section section__services" id="services">
        <h2 className="section__title">Mes Services</h2>
        <button className="services__button">Particuliers</button>
        <button className="services__button">Professionels</button>

        <div className="playingcard section">
          <Playingcard 
            id=""
            backgroundImage={serviceImages}
            littleImage={servicesLittleImages}
            />
            <Playingcard 
            id=""
            backgroundImage={servicesProImages}
            littleImage={servicesLittleImages}
            />

        </div>

      </div>


      
      <div className="section section__contact" id="contact">
        <h2 className="section__title">Me Contacter</h2>
      </div>

      <section className="socials section" id="socials">
        <div className="section-container socials-container">
          <ul className="social-list">

            <li className="social-list__item">
              <a className="social-list__link" href="mailto:antoine@antoine.norris.ca" target="_blank">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>

            <li className="social-list__item">
              <a className="social-list__link" href="tel:+16476258085">
                <i className="fa-solid fa-phone"></i>
              </a>
            </li>

            <li className="social-list__item">
              <a className="social-list__link" href="https://www.instagram.com/antoinenorrisrealestate/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li className="social-list__item">
              <a className="social-list__link" href="https://www.facebook.com/AntoineNorrisRealEstate/" target="_blank">
                <i className="fa-brands fa-facebook" ></i>
              </a>
            </li>

            <li className="social-list__item">
              <a className="social-list__link" href="https://www.tiktok.com/@antoinenorrisrealestate" target="_blank">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </li>

            <li className="social-list__item">
              <a className="social-list__link" href="https://www.yelp.com/biz/antoine-norris-pine-tree-real-estate-barrie" target="_blank">
                <i className="fa-brands fa-yelp"></i>
              </a>
            </li>

            <li className="social-list__item">
              <a className="social-list__link" href="https://www.youtube.com/channel/UCtghhJ1ayx2XCMC1PNHz6tA" target="_blank">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

          </ul>
        </div>
      </section>

    </div>
    )
}