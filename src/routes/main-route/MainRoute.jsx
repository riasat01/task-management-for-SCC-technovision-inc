import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/main-layout/MainLayout";
import ErrorPage from "../../pages/error-page/ErrorPage";
import Home from "../../pages/home/Home";


const MainRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default MainRoute;