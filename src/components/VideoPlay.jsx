import React from 'react';

const VideoPlay=({selectedVideo})=>{

   return (
<div className="videoplay-section">
 {selectedVideo && 
  <div className="videoplay">
  <iframe width="560" height="350" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} title={`${selectedVideo.snippet.title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </div>
 }
 <div className="videoInfo">
   <h4>Title</h4>
    <div className="other-info">
      <div className="left">
         <div className="channel-logo-image">
            <img src="" alt="logo" />
         </div>
          <div className="channel-name">
            <h4>channel name</h4>
            <p>Subscribers</p>
          </div>
          <div className="subscribe-btn">
            Subscribe
          </div>
      </div>
      <div className="right">
         <div className="like-dislike">
            <span>Like</span>
            <span>dislike</span>
         </div>
         <div className="share">
          share
         </div>
         <div className="other">
            ...
         </div>
      </div>
    </div>
 </div>
</div>

   );
}

export default VideoPlay;