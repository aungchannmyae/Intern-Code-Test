import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../features/home/components/HomePageLayout";
import NotFoundPage from "../components/NotFoundPage";
import authRoute from "./authRoute";
import publicRoute from "./publicRoute";
import userRoute from "./userRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout />,
        errorElement: <NotFoundPage />,
        children: [...publicRoute],
      },
      ...authRoute,
      ...userRoute,
]);

export default router;
