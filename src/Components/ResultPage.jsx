import React, { useEffect, useState } from "react";
import { SEARCH_API_URL } from "../Utils/constant";
import { useSearchParams } from "react-router-dom";
import ResultVideoCard from "./ResultVideoCard";
import useOnline from "../Utils/useOnline";
import OfflinePage from "./OfflinePage";

const ResultPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const isOnline = useOnline();

  const getSearchResults = async () => {
    const data = await fetch(SEARCH_API_URL + searchQuery);
    const jsondata = await data.json();
    setSearchResults(jsondata?.items);
  };

  useEffect(() => {
    searchQuery && getSearchResults();
    // eslint-disable-next-line
  }, [searchQuery]);

  if (!isOnline) return <OfflinePage />;

  return (
    <div className="w-full m-auto max-w-5xl">
      {searchResults?.map((item) => {
        return <ResultVideoCard key={item?.id?.videoId} {...item} />;
      })}
    </div>
  );
};

export default ResultPage;
