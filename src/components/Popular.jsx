import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import DropDown from "./templates/DropDown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component"

const Popular = () => {

  const navigate = useNavigate();
  const[category, setCategory]= useState("movie")
  const[popular, setPopular]= useState([])
  const [page , setPage] = useState(1)
  const [hasMore, sethasMore] = useState(true)

  document.title = "AMP | Popular " + category ;

  const GetPopular = async () => {
    try {
     const { data } = await axios.get(`${category}/popular?page=${page}`);
   
     

     if(data.results.length > 0){
      setPopular((prevState)=>[...prevState, ...data.results])
        setPage(page+1);
     }else{
        sethasMore(false);
     }
     
    } catch (error) {
     console.log("ERROR: " + error);
    }
   };  

   console.log(popular
   );

   const refreshHandler = ()=>{
    if(popular.length === 0){
         GetPopular()
    } else{
        setPage(1)
        setPopular([])
        GetPopular()
        
    }
   }
   
  
useEffect(()=>{
    refreshHandler()
    
   
    
},[category])
   


  return popular.length > 0 ? (
    <div className="w-screen h-screen ">

        
      <div className="flex items-center justify-between w-full px-[5%]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd]  ri-arrow-left-line"
          ></i>{" "}
          Popular
        </h1>
        <div className="flex items-center w-[80%]">
        <TopNav />
        <DropDown
          title="Category"
          options={["tv", "movie" ]}
          func={(e)=>setCategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        
        </div>

       
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
      <Cards data={popular} title={category}/>
      </InfiniteScroll>
      
    </div>
  ): <Loading/>
}

export default Popular