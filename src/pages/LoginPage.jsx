import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const LoginPage = () => {
    const {signIn, setUser} = use(AuthContext);
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email,password});

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log("User: ", user.email, "Login Successfull");
                setUser(user);
            })
            .catch((error) => {
                alert(error.message);
                console.log(error.message);
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold flex justify-center mt-5">Login your account</h1>
                <form onSubmit={handleLogIn} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='flex justify-center'>Dont’t Have An Account ?
                            <Link to={"/auth/resister"} className='font-semibold text-secondary'><pre> Register</pre></Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;