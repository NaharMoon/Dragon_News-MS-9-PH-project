import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const ResisterPage = () => {
    
    const { createUser, setUser } = use(AuthContext);

    const handleResister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photo, email, password });

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Error Message: ', errorMessage, "Error Code: ", errorCode);
                alert(errorMessage);
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold flex justify-center mt-5">Register your account</h1>
                <form onSubmit={handleResister} className="card-body">
                    <fieldset className="fieldset">

                        {/* Name */}
                        <label className="label">Name</label>
                        <input
                            name='name'
                            type="text"
                            className="input"
                            placeholder="Name"
                            required
                        />

                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input
                            name='photo'
                            type="text"
                            className="input"
                            placeholder="Photo URL"
                            required
                        />

                        {/* Email */}
                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input" p
                            placeholder="Email"
                            required
                        />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />

                        {/* terms & conditions */}
                        <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <pre>  Accept Term & Conditions</pre>
                        </div>

                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        <button type='submit' className="btn btn-neutral mt-4">Resister</button>
                        <p className='flex justify-center'>Already have An Account ?
                            <Link to={"/auth/login"} className='font-semibold text-secondary'><pre> Login</pre></Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ResisterPage;