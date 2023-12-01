import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from "../wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.post('/auth/login', data);
        toast.success('Login successful!');
        return redirect('/dashboard');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }

}

const Login = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "Submitting";

    return (
        <Wrapper>
            <Form method="post" className="form">
                <Logo />
                <h4>Login</h4>
                <FormRow type="text" name="username" labelText="Username" defualtValue="example@email.com" />
                <FormRow type="password" name="password" labelText="Password" />
                <button type="submit" className="btn btn-block" disabled={isSubmitting}>
                    {isSubmitting ? "submitting..." : "submit"}
                </button>
                <button type="button" className="btn btn-block">Explore The App</button>
                <p>
                    Not a member?
                    <Link to="/register" className="member-btn">
                        Register
                    </Link>
                </p>
            </Form>
        </Wrapper>
    );
}

export default Login;