export default function Navbar(){
  return(
    <div className="navbar">
      <ul className="navbar-ul">
        <li><a href="#about">A Propos de Moi</a></li>
        <img src="public\assets\images\tempphotolandscape.JPG" alt=""/>
        <li><a href="#services">Mes Services</a>
          <div className="menu-sub">
            <li><a href="">Particuliers</a></li>
            <li><a href="">Professionels</a></li>
          </div>
        </li>
        <li><a href="#contact">Prendre Contact</a></li>
      </ul>
    </div>
  )
}