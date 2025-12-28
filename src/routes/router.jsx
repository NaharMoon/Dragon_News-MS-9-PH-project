import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CatagoryNews from "../pages/CatagoryNews";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import ResisterPage from "../pages/ResisterPage";

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
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:"/auth/login",
                element: <LoginPage></LoginPage>
            },
            {
                path:"/auth/resister",
                element: <ResisterPage></ResisterPage>
            },
        ]
    },
    {
        path: "/*",
        element: <h2>Error 404</h2>,
    },
])

export default router;