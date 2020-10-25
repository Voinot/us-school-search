import React, { useState } from "react";
import Axios from "axios";
import CardList from "./CardList";
import SearchBar from "./SearchBar";

const SchoolPage = () => {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await Axios.get("https://api.schooldigger.com/v1/schools", {
      params: {
        st: text,
        appID: "9d83ac8e",
        appKey: "eaa63bca0cef3796563a2043e1a91d0a",
      },
    });

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <div className="App">
      <div className>
        <h1>US School Search</h1>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
};

export default SchoolPage;
