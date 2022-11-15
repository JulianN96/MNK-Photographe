
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";



export default function Socials() {
  return (
    <section className="socials section" id="socials">
      <div className="section-container socials-container">
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-list__link bounce2"
              href="mailto:antoine@antoine.norris.ca"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>

          <li className="social-list__item">
            <a className="social-list__link bounce2" href="tel:+33666160499">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>

          <li className="social-list__item">
            <a
              className="social-list__link bounce2"
              href="https://www.instagram.com/mnkphotographe/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>

          <li className="social-list__item">
            <a
              className="social-list__link bounce2"
              href="https://www.facebook.com"
              target="_blank"
            >
            <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li> 


        </ul>
      </div>
    </section>
  );
}
