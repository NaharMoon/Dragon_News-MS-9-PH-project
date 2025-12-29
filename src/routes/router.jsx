import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CatagoryNews from "../pages/CatagoryNews";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import ResisterPage from "../pages/ResisterPage";
import NewsDetailsPage from "../pages/NewsDetailsPage";
import PrivateRoute from "../pages/PrivateRoute";
import Loading from "../components/Loading";

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
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path:"",
                element:<Home></Home>
            },
        ]
    },
    {
        path: "/news-details/:id",
        element: <PrivateRoute></PrivateRoute>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
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