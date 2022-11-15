export default function Playingcard(props) {



  const cardArray = []

  Object.keys(props.items).forEach(function(key, index){
    cardArray.push(props.items[key])
  })


  const backgroundImageArray = props.backgroundImage.map((item) => {
    return { backgroundImage: `url(${item})` };
  });

  const littleImagesArray = props.littleImage.map((item) => {
    return { backgroundImage: `url(${item})` };
  });

  return (
    <div className="playingcardwidget">
      <div className="card-group">
        
        <div
          className="big-card card"
          href={props.card1}
          style={cardArray[0].style}
        >
          <h3>{cardArray[0].title}</h3>
        </div>

        <div className="little-card card" style={littleImagesArray[0]}></div>


        <div
          className="big-card card"
          href={props.card2}
          style={cardArray[1].style}
        >
          <h3>{cardArray[1].title}</h3>
        </div>

        <div className="little-card card" style={littleImagesArray[1]}></div>


        <div
          className="big-card card"
          href={props.card3}
          style={cardArray[2].style}
        >
          <h3>{cardArray[2].title}</h3>
        </div>

        <div className="little-card card" style={littleImagesArray[2]}></div>


        <div
          className="big-card card"
          href={props.card4}
          style={cardArray[3].style}
        >
          <h3>{cardArray[3].title}</h3>
        </div>

        <div className="little-card card" style={littleImagesArray[3]}></div>

      </div>
    </div>
  );
}
