import AboutUsPage from "../features/home/pages/AboutUsPage";
import ContactUsPage from "../features/home/pages/ContactUsPage";
import HomePage from "../features/home/pages/HomePage";

const publicRoute = [
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: "about-us",
        element: <AboutUsPage />,
    },
    {
        path: "contact-us",
        element: <ContactUsPage />,
    },
    
]
export default publicRoute;