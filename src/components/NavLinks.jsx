import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";

// eslint-disable-next-line react/prop-types
const NavLinks = ({ isBigSidebar }) => {
    const { toggleSidebar } = useDashboardContext();

    return (
        <div className="nav-links">
            {links.map((link) => {
                const { path, text, icon } = link;
                return (
                    <NavLink
                        to={path}
                        key={text}
                        onClick={isBigSidebar ? null : toggleSidebar}
                        className="nav-link"
                        end 
                    >
                        <span className="icon">{icon}</span>
                        {text}
                    </NavLink>
                );
            })}
        </div>
    );
}

export default NavLinks;