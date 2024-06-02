import React from "react";
import Search from "./search";

export function NavBar({ title }) {
    return (
        <nav className="bg-blue-500 py-4 px-6 flex items-center justify-between">
            <a
                href="/"
                className="flex items-center border rounded p-2 hover:bg-blue-600 mr-2"
            >
                <h1 className="text-white text-lg md:text-2xl font-bold mr-2">
                    Web Dev Tools
                </h1>
                <p>{title}</p>
            </a>
            <Search />
        </nav>
    );
}