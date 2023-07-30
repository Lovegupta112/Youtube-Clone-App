import React from 'react';


const VideoSuggestion=({videoList,setSelectedVideo})=>{


// function formatDate(inputDate){
  
//     const date=new Date().getTime();
//     const publishDate=new Date(inputDate).getTime();

//     const timeDiff=date-publishDate;
//     console.log('timediff',timeDiff);
//     const totalDays= Math.ceil(timeDiff/(1000*3600*24));
  
//     console.log(totalDays);
//     if(totalDays===0){
//         let today=new Date(Date.now()-timeDiff)
//         console.log('today',today);
//         // return ` ${} ago` 
//     }
// }
// formatDate(inputDate);

   return(
   <div className="video-suggestion-section">
     <h3 className='suggestion-heading'>Suggestion Videos</h3>
     {videoList && 
      videoList.map((video,index)=>{
        return <div className='suggestion-video' key={index} onClick={()=>setSelectedVideo(video)}>
             <div className="suggesion-video-image">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet && video.snippet.description.slice(0,20)+'...'}/>
             </div>
             <div className="info">
                <h4>{video.snippet &&  video.snippet.title.slice(0,40)+'...'}</h4>
                <p >{video.snippet.channelTitle}</p>
                <p>{video.snippet.publishedAt}</p>
             </div>
        </div>
      })
     }
   </div>
   )
};

export default VideoSuggestion;