import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import { toast } from "react-toastify";

import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    try {
        await customFetch.post('/auth/register', data);
        toast.success('Registration Success!')
        return redirect('/login');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

const Register = () => {
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    return (
        <Wrapper>
            <Form method="post" className="form">
            <Logo/>
            <h4>Register</h4>
                <FormRow type="text" name="firstName" labelText="First Name" defualtValue="John"/>
                <FormRow type="text" name="lastName" labelText="Last Name" defualtValue="Doe"/>
                <FormRow type="text" name="location" labelText="Location" defualtValue="United States"/>
                <FormRow type="email" name="email" labelText="Email" defualtValue="john@doe.com"/>
                <FormRow type="password" name="password" labelText="Password" defualtValue=""/>
                <button type="submit" className="btn btn-block" disabled={isSubmitting}>
                    {isSubmitting ? 'submitting...' : 'submit'}
                </button>
                <p>Already a member?
                <Link to="/login" className="member-btn">
                    Login
                </Link>
                </p>
                </Form>
        </Wrapper>

    );
}

export default Register;