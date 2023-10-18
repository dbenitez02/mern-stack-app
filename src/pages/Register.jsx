import { Link } from "react-router-dom";

import Wrapper from "../wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
    return (
        <Wrapper>
            <form className="form">
            <Logo/>
            <h4>Register</h4>
                <FormRow type="text" name="firstName" labelText="First Name" defualtValue="John"/>
                <FormRow type="text" name="lastName" labelText="Last Name" defualtValue="Doe"/>
                <FormRow type="text" name="location" labelText="Location" defualtValue="United States"/>
                <FormRow type="email" name="email" labelText="Email" defualtValue="john@doe.com"/>
                <FormRow type="password" name="password" labelText="Password" defualtValue=""/>
                <button type="submit" className="btn btn-block">
                    Submit
                </button>
                <p>Already a member?
                <Link to="/login" className="member-btn">
                    Login
                </Link>
                </p>
                </form>
        </Wrapper>

    );
}

export default Register;