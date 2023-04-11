import React from "react";

type PageProps = {
  params: {
    searchTerm: String;
  };
};

const search = async (searchTerm: String) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );

  const data = await res.json()

  return data
};

const SearchResults = async ({ params: { searchTerm } }: PageProps) => {
  const searchResults = await search(searchTerm);

  return <div>SearchResults</div>;
};

export default SearchResults;
