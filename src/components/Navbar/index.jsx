"use client";

import Link from "next/link";
import InputSearch from "@/components/Search/InputSearch";

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <nav className="max-w-7xl mx-auto">
                <div className="flex md:flex-row md:items-center flex-col space-y-2 justify-between p-4">
                    <Link href={"/"}><h1 className="text-white font-bold text-2xl">CuyAnimeList</h1></Link>
                    <InputSearch />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;