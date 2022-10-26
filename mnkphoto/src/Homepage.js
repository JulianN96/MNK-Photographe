export default function Homepage(){
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
      </div>
      
      <div className="section section__contact" id="contact">
        <h2 className="section__title">Me Contacter</h2>
      </div>

      <section class="socials" id="socials">
        <div class="section-container socials-container">
          <ul class="social-list">

            <li class="social-list__item">
              <a class="social-list__link" href="mailto:antoine@antoine.norris.ca" target="_blank">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>

            <li class="social-list__item">
              <a class="social-list__link" href="tel:+16476258085">
                <i class="fa-solid fa-phone"></i>
              </a>
            </li>

            <li class="social-list__item">
              <a class="social-list__link" href="https://www.instagram.com/antoinenorrisrealestate/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li class="social-list__item">
              <a class="social-list__link" href="https://www.facebook.com/AntoineNorrisRealEstate/" target="_blank">
                <i class="fa-brands fa-facebook" ></i>
              </a>
            </li>

            <li class="social-list__item">
              <a class="social-list__link" href="https://www.tiktok.com/@antoinenorrisrealestate" target="_blank">
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </li>

            <li class="social-list__item">
              <a class="social-list__link" href="https://www.yelp.com/biz/antoine-norris-pine-tree-real-estate-barrie" target="_blank">
                <i class="fa-brands fa-yelp"></i>
              </a>
            </li>

            <li class="social-list__item">
              <a class="social-list__link" href="https://www.youtube.com/channel/UCtghhJ1ayx2XCMC1PNHz6tA" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>

          </ul>
        </div>
      </section>

    </div>
    )
}