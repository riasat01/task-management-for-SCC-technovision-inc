import { Outlet } from "react-router-dom";
import Navbar from '../../shared-components/navbar/Navbar'
import Footer from "../../shared-components/footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;