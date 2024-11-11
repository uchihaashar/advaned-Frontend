import React, { useEffect } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import { useState } from "react";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import DropDown from "./templates/DropDown";
import Loading from "./Loading";


const Home = () => {
  document.title = "AMP || homepage";
  const [wallpaper, setWallPaper] = useState(null);
  const[trending, setTrending] = useState(null)
  const [category, setCategory] = useState("all")

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallPaper(randomData);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
 
  const GetTrending = async () => {
   try {
    const { data } = await axios.get(`/trending/${category}/day`);
    setTrending(data.results);
   } catch (error) {
    
   }
  }; 

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();  
  }, [category]);
 
  return trending && wallpaper ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-x-hidden overflow-auto">
        <TopNav />
        <Header data={wallpaper} />
        <div className="flex justify-between p-10 ">
        <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
         <DropDown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)}/>
      </div>


 
        <HorizontalCards  data={trending} />
      </div>
    </>
  ) : (
    <Loading/>
  );
};

export default Home;
