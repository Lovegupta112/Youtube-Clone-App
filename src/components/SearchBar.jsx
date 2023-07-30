import React ,{useState} from 'react';
import axios from 'axios';


const SearchBar=({setVideoList})=>{

const [search,setSearch]=useState('');


function searchHandler(){

    axios.get('https://www.googleapis.com/youtube/v3/search',{
        params:{
            key:import.meta.env.VITE_CLIENT_ID,
            type:'video',
            part:'snippet',
            maxResults:5,
            q:search
        }
    })
    .then((response)=>{
        console.log(response.data.items);
        setVideoList(response.data.items);
    })
    .catch((error)=>{
        console.log(error);
    })
}
console.log(search);
    return(
       <header>
         <div className="logo">
            <img src="" alt="logo" />
         </div>
         <div className="search-section">
            <div className="search">
                <div className="search-image">
                    <img src="" alt="" />
                </div>
            <input type="text"  value={search} onChange={(e)=>setSearch(e.target.value)}  placeholder='Search'/>
            <button onClick={searchHandler}>Search</button>
            </div>
        
         </div>
         <div className="icons-section">
            
         </div>
       </header>
    );
}
export default SearchBar;

//if we use fetch instead of axios 
//syntax: 
// fetch('link',{
//     method:'post', //for get we dont write method 
//     headers:{},
//     params:{},
//     body:JSON.stringify({}) 
// })
//.then(response=>response.json())
//.then(data=>console.log(data))
//.catch(error=>console.log(error)) 