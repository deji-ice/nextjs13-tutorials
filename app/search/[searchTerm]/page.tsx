import React from "react";

type PageProps = {
  params: {
    searchTerm: String;
  };
};

type SearchResults ={
    organic_results :[
        {
            position: number;
            title: String;
            link: String;
            thumbnail: String;
            snippet: String;

        }
    ]
}

const search = async (searchTerm: String) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const data: SearchResults = await res.json()

  return data
};

const SearchResults = async ({ params: { searchTerm } }: PageProps) => {
  const searchResults = await search(searchTerm);

  return <div>
    <p className="tetx-gray-500 text-sm">You searched for: {searchTerm}</p>
    <ol className="space-y-5 p-5">
        {searchResults.organic_results.map((item)=>(
            <li key={item.position} className="list-decimal">
                <p className="font-bold">{item.title}</p>
                <p>{item.snippet}</p>
            </li>
        ))}
    </ol>
  </div>;
};

export default SearchResults;
