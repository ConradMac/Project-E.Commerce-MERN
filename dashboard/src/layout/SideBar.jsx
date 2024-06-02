import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "./../navigation/index";
import { BiLogOutCircle } from "react-icons/bi";

function SideBar({ showSideBar, setShowSideBar }) {
    const [allNav, setAllNav] = useState([]);

    const { pathname } = useLocation();

    // Utilisation du hook d'effet pour effectuer une action après le rendu initial du composant
    useEffect(() => {
        // Appel de la fonction getNavs pour récupérer les éléments de navigation pour le rôle "admin"
        const navs = getNav("seller");
        // Mise à jour de l'état allNav avec les éléments de navigation récupérés
        setAllNav(navs);
    }, []); // Le tableau vide comme deuxième argument indique que cette opération ne doit être effectuée qu'une seule fois après le rendu initial du composant

    // Affichage de l'état allNav dans la console
    console.log(allNav);
    return (
        <div>
            <div
                onClick={() => setShowSideBar(false)}
                className={`fixed duration-200 ${
                    !showSideBar ? "invisible" : "visible"
                } w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}
            ></div>

            <div
                className={`w-[260px] fixed bg-[#71886f] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%) transition-all ${
                    showSideBar ? "left-0" : "-left-[260px] lg:left-0"
                }`}
            >
                <div className="h-[70px] flex justify-center items-center">
                    <Link to="/" className="w-[180px]  flex">
                        <img className="w-[78px]" src="http://localhost:3000/images/santeNatLogo.png" alt="" />
                    </Link>
                </div>

                <div className="px-[16px]">
                    <ul>
                        {allNav.map((nav) => (
                            <li key={nav.id}>
                                <Link
                                    to={nav.path}
                                    className={`${
                                        pathname === nav.path
                                            ? "bg-gray-600 shadow-indigo-500/50 text-white duration-500"
                                            : "text-[#030811] font-bold duration-200"
                                    } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 `}
                                >
                                    {/* Ajoutez le prop key à l'élément de liste */}
                                    {/* Affichez l'icône de la navigation */}
                                    <span>{nav.icon}</span>
                                    {/* Affichez le titre de la navigation */}
                                    <span>{nav.title}</span>
                                </Link>
                            </li>
                        ))}

                        <li>
                            <button
                                className="text-[#030811] font-bold duration-200
                                     px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1"
                            >
                                <span>
                                    <BiLogOutCircle />
                                </span>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
