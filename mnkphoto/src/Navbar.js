import React, {useState} from 'react'

export default function Navbar(){

  //nav colour change when scrolling

  const [navColor, setNavColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return(
    <div className={navColor ? 'navbar navbar-scrolled' : 'navbar'}>
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