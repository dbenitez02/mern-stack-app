import Wrapper from "../wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Login</h4>
                    <FormRow type="text" name="username" labelText="Username" defualtValue="example@email.com"/>
                    <FormRow type="password" name="password" labelText="Password" />
                <button type="submit" className="btn btn-block">Submit</button>
                <button type="button" className="btn btn-block">Explore The App</button>
                <p>Not a member?
                <Link to="/login" className="member-btn">
                    Register
                </Link>
                </p>
            </form>
        </Wrapper>
    );
}

export default Login;