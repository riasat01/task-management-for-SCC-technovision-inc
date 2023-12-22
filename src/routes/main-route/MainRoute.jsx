import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/main-layout/MainLayout";
import ErrorPage from "../../pages/error-page/ErrorPage";
import Home from "../../pages/home/Home";
import Dashboard from "../../pages/dashboard/Dashboard";
import PrivateRoute from "../private-route/PrivateRoute";
import LoginPage from "../../pages/login-page/LoginPage";
import Login from "../../pages/login-page/login/Login";
import Register from "../../pages/login-page/register/Register";


const MainRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>,
                children: [
                    {
                        path: '/login',
                        element: <Login></Login>
                    },
                    {
                        path: "/login/register",
                        element: <Register></Register>
                    }
                ]
            }
        ]
    }
])

export default MainRoute;