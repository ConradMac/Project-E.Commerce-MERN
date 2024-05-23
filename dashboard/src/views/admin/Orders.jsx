import React, { useState } from "react";
import { LuArrowDownSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

function Orders() {
    // on met 1 pour que la pagination commence à 1
    const [currentPage, setCurrentPage] = useState(1);

    //
    const [searchValue, setSearchValue] = useState("");

    //
    const [parPage, setParPage] = useState(5);

    // const pour faire appaitre l'autre div
    // const state = true;
    const [showDiv, setShowDiv] = useState(false);

    return (
        <div className="px-2 lg:px-7 pt-5">
            <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
                <div className="flex justify-between items-center">
                    <select
                        onChange={(event) => setParPage(parseInt(event.target.value))}
                        className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
                        name=""
                        id=""
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input
                        className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 text-[#d0d2d6]"
                        type="text"
                        placeholder="Search..."
                    />
                </div>

                <div className="relative mt-5 overflow-x-auto">
                    <div className="w-full text-sm text-left [#d0d2d6]">
                        <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
                            <div className="flex justify-between items-center">
                                <div className="py-3 w-[25%] font-bold">Order ID</div>
                                <div className="py-3 w-[13%] font-bold">Price</div>
                                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                                <div className="py-3 w-[25%] font-bold">Order Status</div>
                                <div className="py-3 w-[25%] font-bold">Action</div>
                                <div className="py-3 w-[8%] font-bold">
                                    <LuArrowDownSquare />
                                </div>
                            </div>
                        </div>
                        <div className=" text-[#d0d2d6] ">
                            <div className="flex justify-between items-start border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium  whitespace-nowrap">Order ID</div>
                                <div className="py-3 w-[13%] font-medium">£654</div>
                                <div className="py-3 w-[18%] font-medium">Pending</div>
                                <div className="py-3 w-[25%] font-medium">Pending</div>
                                <div className="py-3 w-[25%] font-medium">
                                    <Link>View</Link>
                                </div>
                                <div onClick={(event) => setShowDiv(!showDiv)} className="py-3 w-[8%] font-medium">
                                    <LuArrowDownSquare />
                                </div>
                            </div>

                            <div className={showDiv ? "block border-b border-slate-700 bg-[#8288ed]" : "hidden"}>
                                <div className="flex justify-start items-start border-b border-slate-700">
                                    <div className="py-3 w-[25%] font-medium  whitespace-nowrap pl-3">#34443</div>
                                    <div className="py-3 w-[13%] font-medium">£40</div>
                                    <div className="py-3 w-[18%] font-medium">Pending</div>
                                    <div className="py-3 w-[25%] font-medium">Pending</div>
                                </div>
                                <div className="flex justify-start items-start border-b border-slate-700">
                                    <div className="py-3 w-[25%] font-medium  whitespace-nowrap pl-3">#34443</div>
                                    <div className="py-3 w-[13%] font-medium">£40</div>
                                    <div className="py-3 w-[18%] font-medium">Pending</div>
                                    <div className="py-3 w-[25%] font-medium">Pending</div>
                                </div>
                            </div>
                        </div>
                        <div className=" text-[#d0d2d6] ">
                            <div className="flex justify-between items-start border-b border-slate-700">
                                <div className="py-3 w-[25%] font-medium  whitespace-nowrap">Order ID</div>
                                <div className="py-3 w-[13%] font-medium">£654</div>
                                <div className="py-3 w-[18%] font-medium">Pending</div>
                                <div className="py-3 w-[25%] font-medium">Pending</div>
                                <div className="py-3 w-[25%] font-medium">
                                    <Link>View</Link>
                                </div>
                                <div onClick={(event) => setShowDiv(!showDiv)} className="py-3 w-[8%] font-medium">
                                    <LuArrowDownSquare />
                                </div>
                            </div>

                            <div className={showDiv ? "block border-b border-slate-700 bg-[#8288ed]" : "hidden"}>
                                <div className="flex justify-start items-start border-b border-slate-700">
                                    <div className="py-3 w-[25%] font-medium  whitespace-nowrap pl-3">#34443</div>
                                    <div className="py-3 w-[13%] font-medium">£40</div>
                                    <div className="py-3 w-[18%] font-medium">Pending</div>
                                    <div className="py-3 w-[25%] font-medium">Pending</div>
                                </div>
                                <div className="flex justify-start items-start border-b border-slate-700">
                                    <div className="py-3 w-[25%] font-medium  whitespace-nowrap pl-3">#34443</div>
                                    <div className="py-3 w-[13%] font-medium">£40</div>
                                    <div className="py-3 w-[18%] font-medium">Pending</div>
                                    <div className="py-3 w-[25%] font-medium">Pending</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="w-full flex justify-end mt-4 bottom-4 right-4">
                    {" "}
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={50}
                        parPage={parPage}
                        showItem={3}
                    />
                </div>
            </div>
        </div>
    );
}

export default Orders;
