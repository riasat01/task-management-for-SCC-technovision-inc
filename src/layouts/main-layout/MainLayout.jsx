import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="px-8 md:px-12 lg:px-24">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;