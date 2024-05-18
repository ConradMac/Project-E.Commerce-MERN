import React from "react";
import { FaList } from "react-icons/fa";

function Header({ showSideBar, setShowSideBar }) {
    return (
        <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
            <div className="ml-0 lg:ml-[260] rounded-md h-[65px] flex justify-between items-center bg-[#b1addf] px-5 transition-all">
                <div
                    onClick={() => setShowSideBar(!showSideBar)}
                    className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer"
                >
                    <span>
                        <FaList />
                    </span>
                </div>

                <div className="hidden md:block">
                    <input
                        className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#cdcae9] focus:border-indico-500 overflow-hidden "
                        type="text"
                        name="search"
                        placeholder="Search..."
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
