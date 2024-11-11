import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import DropDown from "./templates/DropDown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component"



const Trending = () => {
  const navigate = useNavigate();
  const[category, setCategory]= useState("all")
  const[duration, setDuration]= useState("day")
  const[trending, setTrending]= useState([])
  const [page , setPage] = useState(1)
  const [hasMore, sethasMore] = useState(true)
  const GetTrending = async () => {
    try {
     const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

     if(data.results.length > 0){
        setTrending((prevState)=>[...prevState, ...data.results])
        setPage(page+1);
     }else{
        sethasMore(false);
     }
     
    } catch (error) {
     console.log("ERROR: " + error);
    }
   };  

   console.log(trending
   );

   const refreshHandler = ()=>{
    if(trending.length === 0){
        GetTrending()
    } else{
        setPage(1)
        setTrending([])
    }
   }
   
  
useEffect(()=>{
    refreshHandler()
    GetTrending()
    
},[category , duration])
   
  return trending.length > 0 ? (
    <div className="w-screen h-screen ">

        
      <div className="flex items-center justify-between w-full px-[5%]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd]  ri-arrow-left-line"
          ></i>{" "}
          Trending
        </h1>
        <div className="flex items-center w-[80%]">
        <TopNav />
        <DropDown
          title="Category"
          options={["movies", "tv", "all"]}
          func={(e)=>setCategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
         <DropDown
          title="Duration"
          options={["week", "day"]}
          func={(e)=>setDuration(e.target.value)}
        />
        </div>

       
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
      <Cards data={trending} title={category}/>
      </InfiniteScroll>
      
    </div>
  ): <Loading/>
}; 

export default Trending;
