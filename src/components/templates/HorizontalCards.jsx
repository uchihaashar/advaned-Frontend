import React from "react";
import DropDown from "./DropDown"; 

const HorizontalCards = ({ data }) => {
  return (
 //   <div className="w-full p-5 h-[40vh] ">
      
          
      <div className="flex w-[100%] overflow-x-auto  h-[40vh] overflow-y-hidden mb-5 p-5">
        {data.map((d, i) => (
          <div key={i} className="min-w-[15%] h-full bg-zinc-900 mr-5 mb-5">
            <img
              className="object-cover w-full h-[55%]"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.profile_path || poster_path
              }`}
              alt=""
            />
            <div className="p-3 h-[45%]">
             
              <h1 className="mt-3 text-xl font-semibold text-white ">
                {d.original_name || d.original_title || d.name || d.title}
              </h1>
              <p className="mt-3 text-white ">
                {d.overview.slice(0, 100)}...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
  //  </div>
  );
};

export default HorizontalCards;
