import React, {useState} from 'react'








export default function HeroCarousel(){

  let count = 0
  // const style = {
  //   backgroundImage: `url("https://source.unsplash.com/random/?cinematic/")`
  // }
  
  // const style2 = {
  //   backgroundImage: `url("https://source.unsplash.com/random/?photo/")`
  // }
  
  const heroBanner1 = [
    <div className="section section__hero" style={{ backgroundImage: `url("https://source.unsplash.com/random/?Cinematic/")`}}>
      <h1 className="section__title">MNK Photographe</h1>
      <button onClick={cycleHeroBanner}>Heroclick</button>
    </div>
  ]

  const heroBanner2 = [    
    <div className="section section__hero" style={{ backgroundImage: `url("https://source.unsplash.com/random/?boat/")`}}>
      <h1 className="section__title">Second Title</h1>
      <button onClick={cycleHeroBanner}>Heroclick</button>
    </div>
  ]

  const heroBanner3 = [    
    <div className="section section__hero" style={{ backgroundImage: `url("https://source.unsplash.com/random/?plane/")`}}>
      <h1 className="section__title">Third Title</h1>
      <button onClick={cycleHeroBanner}>Heroclick</button>
    </div>
  ]

  const heroArray = [heroBanner1, heroBanner2, heroBanner3] 

  const [HeroBanner, setHeroBanner] = useState(heroArray[0])

  function cycleHeroBanner(){
    

    if (count < (heroArray.length)-1){
        count++
    } else{
        count = 0
    }
    console.log(count)
    console.log(heroArray.length)

    setHeroBanner(heroArray[count])
  
  } 

  // setTimeout(()=> {
  //   cycleHeroBanner()
  // }, 3000)

  return(
    
    HeroBanner

    // <div className="section section__hero" style={{backgroundImage: `url("https://source.unsplash.com/random/?cinematic/")`}}>
    //   <h1 className="section__title">MNK Photographe</h1>
    // </div>



    //array with divs
    //style const with backgroundimage property
    //function with settimeout to set active image as 
  )
}

