// Import de l'icône de tableau de bord depuis la bibliothèque react-icons/ai
import { AiOutlineDashboard, AiOutlineShopping } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";

// Déclaration du tableau contenant tous les éléments de la barre de navigation
export const allNav = [
    {
        // Identifiant unique de l'élément de navigation
        id: 1,
        // Titre de l'élément de navigation
        title: "Dashboard",
        // Icône associée à l'élément de navigation, dans ce cas l'icône du tableau de bord
        icon: <AiOutlineDashboard />,
        // Rôle associé à l'élément de navigation, ici "admin"
        role: "admin",
        // Chemin de l'URL vers lequel l'utilisateur sera redirigé en cliquant sur cet élément
        path: "/admin/dashboard",
    },
    {
        // Identifiant unique de l'élément de navigation
        id: 2,
        // Titre de l'élément de navigation
        title: "Orders",
        // Icône associée à l'élément de navigation, dans ce cas l'icône du tableau de bord
        icon: <AiOutlineShopping />,
        // Rôle associé à l'élément de navigation, ici "admin"
        role: "admin",
        // Chemin de l'URL vers lequel l'utilisateur sera redirigé en cliquant sur cet élément
        path: "/admin/dashboard/orders",
    },
    {
        // Identifiant unique de l'élément de navigation
        id: 3,
        // Titre de l'élément de navigation
        title: "Category",
        // Icône associée à l'élément de navigation, dans ce cas l'icône du tableau de bord
        icon: <BiCategory />,
        // Rôle associé à l'élément de navigation, ici "admin"
        role: "admin",
        // Chemin de l'URL vers lequel l'utilisateur sera redirigé en cliquant sur cet élément
        path: "/admin/dashboard/category",
    },
    {
        // Identifiant unique de l'élément de navigation
        id: 4,
        // Titre de l'élément de navigation
        title: "Sellers",
        // Icône associée à l'élément de navigation, dans ce cas l'icône du tableau de bord
        icon: <FaUsers />,
        // Rôle associé à l'élément de navigation, ici "admin"
        role: "admin",
        // Chemin de l'URL vers lequel l'utilisateur sera redirigé en cliquant sur cet élément
        path: "/admin/dashboard/sellers",
    },
    {
        // Identifiant unique de l'élément de navigation
        id: 5,
        // Titre de l'élément de navigation
        title: "Payment Request",
        // Icône associée à l'élément de navigation, dans ce cas l'icône du tableau de bord
        icon: <MdPayment />,
        // Rôle associé à l'élément de navigation, ici "admin"
        role: "admin",
        // Chemin de l'URL vers lequel l'utilisateur sera redirigé en cliquant sur cet élément
        path: "/admin/dashboard/payment-request",
    },
    {
        // Identifiant unique de l'élément de navigation
        id: 6,
        // Titre de l'élément de navigation
        title: "Deactive Sellers",
        // Icône associée à l'élément de navigation, dans ce cas l'icône du tableau de bord
        icon: <FaUserTimes />,
        // Rôle associé à l'élément de navigation, ici "admin"
        role: "admin",
        // Chemin de l'URL vers lequel l'utilisateur sera redirigé en cliquant sur cet élément
        path: "/admin/dashboard/deactive-sellers",
    },
    {
        // Identifiant unique de l'élément de navigation
        id: 7,
        // Titre de l'élément de navigation
        title: "Seller Request",
        // Icône associée à l'élément de navigation, dans ce cas l'icône du tableau de bord
        icon: <FaCodePullRequest />,
        // Rôle associé à l'élément de navigation, ici "admin"
        role: "admin",
        // Chemin de l'URL vers lequel l'utilisateur sera redirigé en cliquant sur cet élément
        path: "/admin/dashboard/sellers-request",
    },
    {
        // Identifiant unique de l'élément de navigation
        id: 8,
        // Titre de l'élément de navigation
        title: "Live Chat",
        // Icône associée à l'élément de navigation, dans ce cas l'icône du tableau de bord
        icon: <IoIosChatbubbles />,
        // Rôle associé à l'élément de navigation, ici "admin"
        role: "admin",
        // Chemin de l'URL vers lequel l'utilisateur sera redirigé en cliquant sur cet élément
        path: "/admin/dashboard/chat-seller",
    },
];
