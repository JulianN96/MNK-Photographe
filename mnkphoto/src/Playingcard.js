export default function Playingcard(props){

  const bIArray = props.backgroundImage
  
  
  const backgroundImageArray = (props.backgroundImage).map(item => {
    return(
      {backgroundImage: `url(${item})`}
    )
  })

  const littleImagesArray = (props.littleImage).map(item => {
    return(
      {backgroundImage: `url(${item})`}
    )
  })

  return(
    <div className="playingcardwidget">
      <div className="card-group">
        <div className ="big-card card" href={props.card1} style={backgroundImageArray[0]}>
          <h3>Marriage</h3>
        </div>
        <div className ="little-card card" style={littleImagesArray[0]}></div>
        <div className ="big-card card" href={props.card2} style={backgroundImageArray[1]}>
          <h3>Photos de Famille</h3>
        </div>
        <div className ="little-card card" style={littleImagesArray[1]}></div>
        <div className ="big-card card" href={props.card3} style={backgroundImageArray[2]}>
          <h3>Grossesse</h3>
        </div>
        <div className ="little-card card" style={littleImagesArray[2]}></div>
        <div className ="big-card card" href={props.card4} style={backgroundImageArray[3]}>
          <h3>Portraits</h3>
        </div>
        <div className ="little-card card" style={littleImagesArray[3]}></div>
      </div>
    </div>
  )
}