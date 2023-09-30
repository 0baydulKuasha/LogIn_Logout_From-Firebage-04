import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Home from "../Component/Navbar/Pages/Home/Home";

const Main = () => {
    return (
        <div>
            <div className=" container m-auto">
                <Navbar />
                <Outlet />
            </div>
        </div>

    );
};

export default Main;