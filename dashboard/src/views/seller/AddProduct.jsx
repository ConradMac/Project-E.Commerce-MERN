import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdCloseCircle, IoMdImages } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { get_category } from "./../../store/Reducers/categoryReducer";
import { add_product, messageClear } from "./../../store/Reducers/productReducer";
import { overrideStyle } from "../../utilities/utils";
import { toast } from "react-hot-toast";
import { PropagateLoader } from "react-spinners";

function AddProduct() {
    const dispatch = useDispatch();
    // Permet de récupérer les catégories dans notre state
    const { categories } = useSelector((state) => state.category);
    const { loader, successMessage, errorMessage } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(
            // get_category provient du fichier categoryReducer
            get_category({
                searchValue: "",
                parPage: "",
                page: "",
            })
        );
    }, []);

    const [categoryShow, setCategoryShow] = useState(false);
    const [category, setCategory] = useState("");
    // const [allCategory, setAllCategory] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    // const aryane = "azertyuiopqsdfghjkMDFRxcvbn";
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
            setAllCategory(categories);
        }
    };

    const inputHandle = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const [state, setState] = useState({
        name: "",
        description: "",
        discount: "",
        price: "",
        brand: "",
        stock: "",
    });

    const [images, setImages] = useState([]);
    const [imageShow, setImageShow] = useState([]);

    const imageHandleUpload = (e) => {
        const files = e.target.files;
        const length = files.length;
        if (length > 0) {
            setImages([...images, ...files]);
            let imageUrl = [];
            for (let i = 0; i < length; i++) {
                imageUrl.push({ url: URL.createObjectURL(files[i]) });
            }
            setImageShow([...imageShow, ...imageUrl]);
        }
    };

    const changeImage = (img, index) => {
        // Vérifie si une image a été fournie
        if (img) {
            // Crée une copie de l'état actuel de imageShow
            let tempUrl = imageShow;

            // Crée une copie de l'état actuel de images
            let tempImages = images;

            // Remplace l'image à l'index spécifié par la nouvelle image
            tempImages[index] = img;

            // Crée une nouvelle URL pour l'image remplacée et met à jour tempUrl
            tempUrl[index] = { url: URL.createObjectURL(img) };

            // Met à jour l'état de imageShow avec la nouvelle copie modifiée
            setImageShow([...tempUrl]);

            // Met à jour l'état de images avec la nouvelle copie modifiée
            setImages([...tempImages]);
        }
    };

    const removeImage = (i) => {
        const filterImage = images.filter((img, index) => index !== i);
        const filterImageUrl = imageShow.filter((img, index) => index !== i);

        setImages(filterImage);
        setImageShow(filterImageUrl);
    };

    const add = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", state.name);
        formData.append("description", state.description);
        formData.append("discount", state.discount);
        formData.append("price", state.price);
        formData.append("brand", state.brand);
        formData.append("stock", state.stock);
        formData.append("shopName", "SANTE NAT");
        // formData.append("name", state.name);
        formData.append("category", category);

        for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {
            formData.append("images", images[imageIndex]);
        }
        console.log(state);
        dispatch(add_product(formData));
    };

    useEffect(() => {
        // categories provient de notre ligne avec le state en haut.
        setAllCategory(categories);
    }, [categories]);

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage); // Affichage du message de succès avec toast
            dispatch(messageClear()); // Appel à l'action messageClear pour effacer le message de succès
            setState({
                name: "",
                description: "",
                discount: "",
                price: "",
                brand: "",
                stock: "",
            });
            setImageShow([]);
            setImages([]);
            setCategory("");
        }
        if (errorMessage) {
            toast.error(errorMessage); // Affichage du message d'erreur avec toast
            dispatch(messageClear()); // Appel à l'action messageClear pour effacer le message d'erreur
        }
    }, [errorMessage, successMessage]);

    return (
        <div className="px-2 lg-px-7 pt-5">
            <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
                <div className="flex justify-between items-center pb-4">
                    <h1 className="text-[#d0d2d6] text-xl font-semibold">Add Product</h1>
                    <Link
                        to={"/seller/dashboard/products"}
                        className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white roundd-md px-7 py-2"
                    >
                        All Product
                    </Link>
                </div>
                <div>
                    <form onSubmit={add}>
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
                                                        setCategory(category.name);
                                                        setSearchValue("");
                                                        setAllCategory(categories);
                                                    }}
                                                    key={index}
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
                            {imageShow.map((img, i) => (
                                <div className="h-[180px] relative">
                                    <label htmlFor={i}>
                                        <img className="w-full h-full rounded-sm" src={img.url} alt="" />
                                    </label>
                                    <input
                                        onChange={(e) => changeImage(e.target.files[0], i)}
                                        type="file"
                                        id={i}
                                        className="hidden"
                                    />
                                    <span
                                        onClick={() => removeImage(i)}
                                        // on passe i de index car notre index des photos est 1 2 3 4 5....

                                        className="p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-salte-400/5à text-white absolute top-1 right-1 rounded-full"
                                    >
                                        <IoMdCloseCircle />
                                    </span>
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
                        <div className="flex">
                            <button
                                disabled={loader} // Pas besoin de ternaire ici
                                className="bg-red-500 w-[300px] hover:shadow-red-300/50 hover:shadow-lg text-white rounded-md px700 py-2 mb-3"
                            >
                                {loader ? <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : "Add Product"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
