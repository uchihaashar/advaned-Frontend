import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import DropDown from "./templates/DropDown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";

const Trending = () => {
  const navigate = useNavigate();
  const[category, setCategory]= useState("all")
  const[duration, setDuration]= useState("day")
  const[trending, setTrending]= useState(null)

  const GetTrending = async () => {
    try {
     const { data } = await axios.get(`/trending/${category}/${duration}`);
     setTrending(data.results);
    } catch (error) {
     console.log("ERROR: " + error);
     
    }
   }; 

   console.log(trending
   );
   
  
useEffect(()=>{
    GetTrending();
},[category , duration])
   
  return trending ? (
    <div className="w-screen h-screen px-[3%] overflow-hidden overflow-y-auto">

        
      <div className="flex items-center justify-between w-full">
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
  
     <Cards data={trending} title={category}/>
      
    </div>
  ): <Loading/>
}; 

export default Trending;
