import React from 'react'
import video from "../assets/homevideo.mp4"
const BackgroundVideo = () => {
  return (
    <div className="bgContainer">
      <div className='overlay'></div>
        <video src={video} autoPlay loop muted/>
    </div>
  )
}

export default BackgroundVideo
