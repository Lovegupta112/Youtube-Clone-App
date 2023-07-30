import React ,{useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoSuggestion from './components/VideoSuggestion';
import VideoPlay from './components/VideoPlay';
import items  from './data';


const App=()=>{

 const[videoList,setVideoList]=useState(items);
 const [selectedVideo,setSelectedVideo]=useState('');

    return (
       <div className="container">
          <SearchBar setVideoList={setVideoList}/>
           <main>
            <VideoPlay selectedVideo={selectedVideo}/>
            <VideoSuggestion videoList={videoList} setSelectedVideo={setSelectedVideo}/>
           </main>
       </div>
    );
}
export default App;