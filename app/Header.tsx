import Link from "next/link";
import React from "react";

const Header = () => {
  return(
    <header className="p-5 bg-blue-600  space-x-3">
        <Link href={"/"} className="p-2 mt-5 bg-white text-blue-400 rounded-lg font-semibold">Home</Link>
        <Link href={"/todos"} className="p-2 mt-5 bg-white text-blue-400 rounded-lg font-semibold">Todos</Link>
    </header>
  )

};

export default Header;
