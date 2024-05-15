// dans ce fichier, on va load le sellerRoutes.js et le adminRoutes.js

import { adminRoutes } from "./adminRoute";
import { sellerRoutes } from "./sellerRoutes";

// on exporte les deux routes
export const privateRoutes = [...adminRoutes, ...sellerRoutes];
