import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full px-[5%] bg-[#1f1e24]">
      {data.map((c, i) => (
        <Link className="relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className="shadow-[8px_17px_38px_2px(0,0,0,.5)] h-[40vh] object-cover "
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=""
          />
          <h1 className="mt-3 text-2xl font-semibold text-zinc-200">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>


          {c.vote_average &&  <div className="text-white absolute right-[-10%] bottom-[25%] text-xl font-semibold rounded-full bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center">
            {(c.vote_average*10).toFixed()} <sup>%</sup>
            </div>}
         
        </Link> 
      ))} 
    </div>
  );
};
export default Cards;
