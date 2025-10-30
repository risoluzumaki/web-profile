import { createBrowserRouter } from "react-router";
import Home from "../modules/home/Home";
import Portfolio from "../modules/portfolio/Portfolio";
import Contact from "../modules/contact/Contact";
import Layout from "../shared/Layout";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],
    errorElement: <NotFound/> 
  }
]);