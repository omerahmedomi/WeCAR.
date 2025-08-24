import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RentalCars from "./pages/RentalCars";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import FAQs from "./pages/FAQs";
import SignUp from "./pages/SignUp";
import { GlobalProvider } from "./GlobalContext";
import RentalPage from "./pages/RentalPage";
import Admin from "./Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/rental-cars",
    element: <RentalCars />,
  },
  {
    path: "/services",
    element: <OurServices />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/rental-cars/:id",
    element: <RentalPage />,
  },
  {
    path:'/admin',
    element:<Admin/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>
);
