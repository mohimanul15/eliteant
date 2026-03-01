import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import NotFound from "../pages/notfound/NotFound";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import Home2 from "../pages/home/Home2";
import Homed from "../pages/home/Homed";

const RouterList = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'services',
                element: <Services></Services>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default RouterList;