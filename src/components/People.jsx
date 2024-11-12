import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import DropDown from "./templates/DropDown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setperson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  document.title = "AMP | person Shows ";

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setperson((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  console.log(person);

  const refreshHandler = () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setPage(1);
      setperson([]);
      GetPerson();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return person.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="flex items-center justify-between w-full px-[5%]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd]  ri-arrow-left-line"
          ></i>{" "}
          People{" "}
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[80%]">
          <TopNav />
          <div className="w-[2%]"></div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={person} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
