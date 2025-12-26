import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CatagoryNews from "../pages/CatagoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"/category/:id",
                element:<CatagoryNews></CatagoryNews>,
                loader: () => fetch("/news.json"),
            },
            {
                path:"",
                element:<Home></Home>
            },
        ]
    },
    {
        path: "/news",
        element: <h2>News Layout</h2>,
    },
    {
        path: "/auth",
        element: <h2>Authentication Layout</h2>,
    },
    {
        path: "/*",
        element: <h2>Error 404</h2>,
    },
])

export default router;