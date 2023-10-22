import { FaAlignLeft } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import Wrapper from "../wrappers/Navbar";
import Logo from "./Logo";

const Navbar = () => {
    const { toggleSidebar } = useDashboardContext();

    return(
        <Wrapper>
            <div className="nav-center">
                <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                    <FaAlignLeft/>
                </button>
                <div>
                    <Logo />
                    <h4 className="logo-text">Dashboard</h4>
                </div>
                <div className="btn-container">toggle/logout</div>
            </div>
        </Wrapper>

    );

}

export default Navbar;