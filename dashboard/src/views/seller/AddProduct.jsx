import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdImages } from "react-icons/io";

function AddProduct() {
    const categorys = [
        { id: 1, name: "Sports" },
        { id: 2, name: "T-shirts" },
        { id: 3, name: "Mobile" },
        { id: 4, name: "Computer" },
        { id: 5, name: "Watch" },
        { id: 6, name: "Trouser" },
    ];

    const [categoryShow, setCategoryShow] = useState(false);
    const [category, setCategory] = useState("");
    // const [allCategory, setAllCategory] = useState([]);
    const [allCategory, setAllCategory] = useState(categorys);
    const [searchValue, setSearchValue] = useState("");

    const aryane = "azertyuiopqsdfghjkMDFRxcvbn";
    const categorySearch = (event) => {
        const value = event.target.value;
        // on doit passer notre valeur dans le setsearchValue
        setSearchValue(value);
        // on doit filtrer les categories
        if (value) {
            let searchValue = allCategory.filter(
                (category) => category.name.toLowerCase().indexOf(value.toLowerCase()) > -1
            );
            setAllCategory(searchValue);
        } else {
            setAllCategory(categorys);
        }
    };

    const [state, setState] = useState({
        name: "",
        description: "",
        discount: "",
        price: "",
        brand: "",
        stock: "",
    });

    const inputHandle = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const [image, setImage] = useState([]);
    const [imageShow, setImageShow] = useState([]);

    const imageHandleUpload = (event) => {
        console.log(event.target.files);
        const files = event.target.files;
        const length = files.length;
        if (length > 0) {
            setImage([...imageShow, ...files]);
            let imageUrls = [];
            for (let i = 0; i < length; i++) {
                imageUrls.push({ url: URL.createObjectURL(files[i]) });
            }
            setImageShow([...imageShow, ...files]);
        }
    };
    // console.log(image);
    // console.log(imageShow);

    return (
        <div className="px-2 lg-px-7 pt-5">
            <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
                <div className="flex justify-between items-center pb-4">
                    <h1 className="text-[#d0d2d6] text-xl font-semibold">Add Product</h1>
                    <Link className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white roundd-md px-7 py-2">
                        All Product
                    </Link>
                </div>
                <div>
                    <form>
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="name">Product Name</label>
                                <input
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700  rounded-md text-[#d0d2d6]"
                                    onChange={inputHandle}
                                    value={state.name}
                                    placeholder="Product Name"
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="brand">Product Brand</label>
                                <input
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700  rounded-md text-[#d0d2d6]"
                                    onChange={inputHandle}
                                    value={state.brand}
                                    placeholder="Product brand"
                                    type="text"
                                    name="brand"
                                    id="brand"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
                            <div className="flex flex-col w-full gap-1 relative">
                                <label htmlFor="category">Category</label>
                                <input
                                    // readOnly
                                    onClick={() => setCategoryShow(!categoryShow)}
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700  rounded-md text-[#d0d2d6]"
                                    // onChange={inputHandle}
                                    value={category}
                                    placeholder="-- Select Category --"
                                    type="text"
                                    id="category"
                                />
                                <div
                                    // prendre note de relative et absolute
                                    className={`absolute top-[101%] bg-[#475569] w-full transition-all ${
                                        categoryShow ? "scale-100" : "scale-0"
                                    }`}
                                >
                                    <div className="w-full px-4 py-2 fixed">
                                        <input
                                            value={searchValue}
                                            onChange={categorySearch}
                                            className="px-3 py-1 focus:border-indigo-500 outline-none bg-transparent border border-slate700 rounded-md text-[#d0d2d6] overflow-hidden w-full"
                                            type="text"
                                            placeholder="Search"
                                        />
                                    </div>
                                    <div className="pt-14">
                                        <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scrool">
                                            {allCategory.map((category, index) => (
                                                <span
                                                    className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${
                                                        category === categoryShow.name && "bg-indigo-500"
                                                    }`}
                                                    onClick={() => {
                                                        setCategoryShow(false);
                                                        setCategoryShow(category.name);
                                                        setSearchValue("");
                                                        setAllCategory(categorys);
                                                    }}
                                                >
                                                    {category.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="brand">Product stock</label>
                                <input
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700  rounded-md text-[#d0d2d6]"
                                    onChange={inputHandle}
                                    value={state.stock}
                                    placeholder="Product stock"
                                    type="text"
                                    name="stock"
                                    id="stock"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="price">Price</label>
                                <input
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700  rounded-md text-[#d0d2d6]"
                                    onChange={inputHandle}
                                    value={state.price}
                                    placeholder="Price"
                                    type="number"
                                    name="price"
                                    id="price"
                                />
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="brand">Discount</label>
                                <input
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700  rounded-md text-[#d0d2d6]"
                                    onChange={inputHandle}
                                    value={state.discount}
                                    placeholder="Discount by %"
                                    type="number"
                                    name="discount"
                                    id="discount"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-5">
                            <label className="text-[#d0d2d6]" htmlFor="price">
                                Description
                            </label>
                            <textarea
                                className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700  rounded-md text-[#d0d2d6]"
                                onChange={inputHandle}
                                value={state.description}
                                placeholder="description"
                                type="number"
                                name="description"
                                id="description"
                                cols="10"
                                rows="5"
                            ></textarea>
                        </div>
                        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4">
                            {imageShow.map((image, index) => (
                                <div className="h-[180px] relative">
                                    <label htmlFor="{index}">
                                        <img className="w-full  h-full rounded-sm" src="image.url" alt="" />
                                    </label>
                                </div>
                            ))}

                            <label
                                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-red-500 w-full text-[#d0d2d6]"
                                htmlFor="image"
                            >
                                <span>
                                    <IoMdImages />
                                </span>
                                <span>Upload Image</span>
                            </label>
                            <input className="hidden" onChange={imageHandleUpload} multiple type="file" id="image" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
