import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_Login, messageClear } from "../../store/Reducers/authReducer";
//  pour le loader
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";

function AdminLogin() {
    const dispatch = useDispatch();

    // Cette ligne utilise le hook useSelector fourni par React Redux pour extraire la valeur de loader à partir du state global. dans authReducer
    const { loader, errorMessage } = useSelector((state) => state.auth);

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
        dispatch(admin_Login(state));
        // console.log(state);
    };

    const overrideStyle = {
        display: "flex",
        margin: "0 auto",
        height: "24px",
        justifyContent: "center",
        alignItems: "center",
    };

    // Ce useEffect est utilisé pour afficher les messages d'erreur et de succès à l'aide de la bibliothèque hot-toast. Si errorMessage est défini, cela signifie qu'une erreur s'est produite lors de la tentative de connexion de l'utilisateur, et nous affichons un message d'erreur à l'aide de la fonction error de hot-toast.
    // Utilisation de useEffect pour afficher et effacer le message d'erreur
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage); // Affichage du message d'erreur avec toast
            dispatch(messageClear()); // Appel à l'action messageClear pour effacer le message d'erreur
        }
    }, [errorMessage]); // Dépendance : le message d'erreur

    return (
        <div className="min-w-screen min-h-screen bg-[#2cdcae9] flex justify-center items-center ">
            <div className="w-[350px] text-[#000000] p-2 ">
                <div className="bg-[#e2e1e6] p-4 rounded-md">
                    <div className="h-[150px] flex justify-center items-center">
                        <div className="w-[150px] h-[160px]">
                            <img
                                className="w-[150px] h-[150px] "
                                src="http://localhost:3000/images/santeNatLogo.png"
                                alt="Logo du e-shop"
                            />
                        </div>
                    </div>

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
                            {loader ? <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
