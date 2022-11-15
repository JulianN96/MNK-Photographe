import InfiniteScroll from "react-infinite-scroll-component";
import imagedata from "./imagedata";
import imagedata2 from "./imagedata2";

import React from "react";
import PhotoGalleryGenerator from "./PhotoGalleryGenerator";
import { Link } from "react-router-dom";



export default function PhotoGallery(){



    function scrollGallery(){

        const photoGalleryElement1 = document.getElementById("photoGallery-element1")
        photoGalleryElement1.scrollBy(0, 3)
        const photoGalleryElement2 = document.getElementById("photoGallery-element2")
        photoGalleryElement2.scrollBy(0, 1)
        const photoGalleryElement3 = document.getElementById("photoGallery-element3")
        photoGalleryElement3.scrollBy(0, 5)
        const photoGalleryElement4 = document.getElementById("photoGallery-element4")
        photoGalleryElement4.scrollBy(0, 2)
    }
    
    function scrollStop(id){
      
      const photoGalleryElement = document.getElementById(id)
      console.log(photoGalleryElement)
      // photoGalleryElement.scrollBy(0, 0)
    }


  
  return(
    <div className="photoGallery">

    <div className="services__menu__banner">
      <h1 className ="services__menu__title">Ma Gallerie Photos</h1>
      <Link className="standardButton services__menu__returnButton" to="/">Retour au Site</Link>
    </div>

      <div className="photoGalleries">

        <div className="photoGallery-container" id=
        "photoGallery-element1" onMouseEnter={scrollStop("photoGallery-element1")}>
          <PhotoGalleryGenerator 
            id= "photoGallery-element1"
            images={imagedata}
            invserse = {false}
          />
        </div>
        <div className="photoGallery-container" id=
        "photoGallery-element2">
          <PhotoGalleryGenerator 
            id= "photoGallery-element2"
            images={imagedata2}
            invserse = {true}
          />
        </div>
        <div className="photoGallery-container" id=
        "photoGallery-element3">
          <PhotoGalleryGenerator 
            id= "photoGallery-element3"
            images={imagedata}
            inverse={false}
          />
        </div>
        <div className="photoGallery-container" id=
        "photoGallery-element4">
          <PhotoGalleryGenerator 
           id= "photoGallery-element4"
           images={imagedata2}
           inverse={true}
          />
        </div>

      </div>
      
      {setInterval(scrollGallery, 50)}


    </div>
  )
}