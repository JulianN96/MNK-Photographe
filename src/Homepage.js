import HeroCarousel from "./HeroCarousel";
import Playingcard from "./Playingcard";
import Socials from "./Socials";
import servicesdata from "./servicesdata";

export default function Homepage() {
  const serviceImages = [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1588979355313-6711a095465f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80",
    "https://images.unsplash.com/photo-1544784179-ae1535e9f013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80",
    "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];

  const servicesLittleImages = [
    "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];

  const servicesProImages = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    "https://images.unsplash.com/photo-1620519185537-4e18c939713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80",
    "https://plus.unsplash.com/premium_photo-1664199486592-559b2efb0f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1587614298171-a223667e51c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ];

  // fetch("./cards.json")
  //   .then(res => res.json())
  //   .then(data => console.log(data))

  return (
    <div className="homepage">
      <script
        src="https://kit.fontawesome.com/d07c4d8f71.js"
        crossorigin="anonymous"
      ></script>

      <HeroCarousel />

      <div className="section section__about" id="about">
        <div className="about__text">
          <h2 className="section__title">A propos de Moi</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <img
          className="about__img"
          src="https://images.unsplash.com/photo-1620519185537-4e18c939713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80"
          alt="Marie Krillow"
        ></img>
      </div>

      <div className="section section__services" id="services">
        <h2 className="section__title">Mes Services</h2>

        <div className="playingcard section">
          <Playingcard
            id=""
            backgroundImage={serviceImages}
            littleImage={servicesLittleImages}
            items={servicesdata.particuliers}
          />

          <Playingcard
            id=""
            backgroundImage={servicesProImages}
            littleImage={servicesLittleImages}
            items={servicesdata.professionels}
          />
        </div>
        
      </div>

      <div className="section section__contact" id="contact">
        <h2 className="section__title">Me Contacter</h2>
        <div className="homepage__contact-iconContainer">
          <Socials />
        </div>
      </div>


    </div>
  );
}
