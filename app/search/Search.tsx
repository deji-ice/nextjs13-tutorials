"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-2">
      <input
        className=""
        type="text"
        placeholder="Enter the Search Id"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="py-2 bg-blue-600 rounded-lg px-4 text-white font-bold">Search 🔍  </button>
    </form>
  );
};

export default Search;
