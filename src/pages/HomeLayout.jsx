import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return(
       <div>
       <nav>navbar</nav>
       <h1>Home Layout</h1>
       <Outlet />
       </div>
    );
};

export default HomeLayout;