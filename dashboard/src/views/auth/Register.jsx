import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaPassport } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utilities/utils";
import { seller_register, messageClear } from "./../../store/Reducers/authReducer";
import toast from "react-hot-toast";

function Register() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    // on définit un state pour les inputs de notre formulaire
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
    });

    // on définit une fonction pour gérer les inputs
    const inputHandle = (e) => {
        setState({
            ...state,
            // .name permet de récupérer le nom de l'input ou l'attribut name de l'input
            [e.target.name]: e.target.value,
        });
    };

    // on définit une fonction pour gérer la soumission du formulaire
    const submitHandle = (e) => {
        // on empêche le comportement par défaut du formulaire de se recharger
        e.preventDefault();
        console.log(state);
        dispatch(seller_register(state));
    };

    const { loader, errorMessage, successMessage } = useSelector((state) => state.auth);

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage); // Affichage du message de succès avec toast
            dispatch(messageClear()); // Appel à l'action messageClear pour effacer le message de succès
            navigate("/");
        }
        if (errorMessage) {
            toast.error(errorMessage); // Affichage du message d'erreur avec toast
            dispatch(messageClear()); // Appel à l'action messageClear pour effacer le message d'erreur
        }
    }, [errorMessage, successMessage]);

    return (
        <div className="min-w-screen min-h-screen bg-[#2cdcae9] flex justify-center items-center">
            <div className="w-[350px] text-[#ffffff] p-2">
                <div className="bg-[#6f68d1] p-4 rounded-md">
                    <h2 className="text-xl mb-3 font-bold">Welcome to SANTE NAT 쌍떼 낫</h2>
                    <p className="text-sm mb-3 font-medium">Please Register your Account.</p>

                    <form onSubmit={submitHandle}>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={inputHandle}
                                value={state.name}
                                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                                type="name"
                                name="name"
                                placeholder="name"
                                id="name"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="name">Email</label>
                            <input
                                onChange={inputHandle}
                                value={state.email}
                                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                                type="email"
                                name="email"
                                placeholder="Email"
                                id="email"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="name">Password</label>
                            <input
                                onChange={inputHandle}
                                value={state.password}
                                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                                type="password"
                                name="password"
                                placeholder="Password"
                                id="password"
                                required
                            />
                        </div>

                        <div className="flex items-center w-full gap-3 mb-3">
                            <input
                                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-b-500"
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                            />
                            <label htmlFor="checkbox">I agree to privacy policy and terms</label>
                        </div>

                        <button
                            disabled={loader} // Pas besoin de ternaire ici
                            className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px700 py-2 mb-3"
                        >
                            {loader ? <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : "Sign Up"}
                        </button>

                        <div className="flex items-center mb-3 gap-3 justify-center">
                            <p>
                                Already have an account ?{" "}
                                <Link className="font-bold" to="/login">
                                    Sign In
                                </Link>
                            </p>
                        </div>

                        <div className="w-full flex justify-center items-center mb-3">
                            {/* code for line */}
                            <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                            <div className="w-[10%] flex justify-center items-center">
                                <span className="pb-1">or</span>
                            </div>
                            <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                        </div>

                        <div className="flex justify-center items-center gap-3">
                            <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                                <FaGoogle />
                            </div>
                            <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                                <FaFacebookF />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
