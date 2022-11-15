import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import { faPeriscope } from "@fortawesome/free-brands-svg-icons";



export default function PhotoGalleryGenerator(props){

    const imageGallery = props.images

const initialImageSet =
    imageGallery.map(image => (
    
      <img className="gallery_photo" src={image}/>
    
  ))
  


  const [imageItems, setImageItems] = React.useState([initialImageSet])

  const scrollLength=imageItems.length

  function fetchData(){
    console.log("fetching images...")
    setImageItems([...imageItems, ...initialImageSet])
    scrollLength = scrollLength + scrollLength
  }

  return(
    <div>
      <InfiniteScroll
        dataLength={scrollLength}
        next={fetchData}
        hasMore={true}
        loader={<h3>Loading...</h3>}
        endMessage={<p>End photos</p>}
        scrollThreshold={0.9}
        scrollableTarget={props.id}
        inverse={false}
        >
          {imageItems}
        </InfiniteScroll>
    </div>
  )
}