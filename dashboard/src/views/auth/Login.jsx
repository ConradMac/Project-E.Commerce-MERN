import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utilities/utils";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { seller_login, messageClear } from "./../../store/Reducers/authReducer";

function Login() {
    const navigate = useNavigate();

    const { loader, errorMessage, successMessage } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandle = (e) => {
        e.preventDefault();
        dispatch(seller_login(state));
        console.log(state);
    };

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
                    <p className="text-sm mb-3 font-medium">Please Sign In to your account</p>

                    <form onSubmit={submitHandle}>
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

                        <button
                            disabled={loader} // Pas besoin de ternaire ici
                            className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px700 py-2 mb-3"
                        >
                            {loader ? <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : "Sign In"}
                        </button>

                        <div className="flex items-center mb-3 gap-3 justify-center">
                            <p>
                                Don't have an account ?{" "}
                                <Link className="font-bold" to="/register">
                                    Sign Up
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

export default Login;
