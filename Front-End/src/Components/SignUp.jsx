import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const SignUp = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    const navigate = useNavigate();

    //this function is called user click on create account
    const handleSubmit = async (e) => {

        //compare to password and conform password
        let password = document.getElementById("password");
        let cpassword = document.getElementById("cpassword");
        if (password.value !== cpassword.value) {
            props.showAlert("conform password mismatch", "false");
        }

        //page will not reload
        e.preventDefault();
        // API call
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        // console.log(json);
        if (json.success) {
            //save the auth token in localstorage and redirect user
            // localStorage.setItem('token', json.authToken);
            //here we want to redirect user to the home so we write /home 
            navigate("/login");
            props.showAlert("Account created successfully...login to continue.", "true");
        }
        else {
            // alert(json.Error)
            props.showAlert(json.Error, "false");
        }
    }
    const onChange = (event) => {

        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }
    document.title = "Cloud Notes - SignUp";
    return (
        <>
            <div className="w-5/6 mx-auto bg-slate-200">
                <section className="min-h-screen bg-slate-200 h-auto">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6 pt-36">
                        {/* <h2>New to Cloud Notes? sign up now and start your journey</h2> */}

                        {/* <h1 className="font-extrabold"> Add terms and condition </h1> */}
                        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 " >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="SingUp Label"
                            />
                        </div>
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div className="bg-slate-100  px-6 py-8 rounded shadow-md text-black w-full">
                                {/* form start here */}
                                <form onSubmit={handleSubmit}>
                                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                                    <input
                                        type="text"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="name"
                                        id="name" value={credentials.name} onChange={onChange}
                                        placeholder="Full Name" required />

                                    <input
                                        type="email"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="email"
                                        id="email" value={credentials.email} onChange={onChange}
                                        placeholder="Email" required />

                                    <input
                                        type="password"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="password"
                                        id="password" value={credentials.password} onChange={onChange}
                                        placeholder="Password" minLength={5} required />
                                    <input
                                        type="password"
                                        className="block border border-grey-light w-full p-3 rounded mb-4"
                                        name="cpassword" id="cpassword"
                                        placeholder="Confirm Password" minLength={5} required />

                                    <button type="submit" className="w-full text-center py-3 rounded bg-green text-white bg-green-500 focus:outline-none my-1"
                                    >Create Account</button>

                                    <div className="text-grey-dark mt-6">
                                        Already have an account?
                                        <Link to="/login" className="no-underline border-b border-blue px-1 text-gray-900">
                                            Log in
                                        </Link>.
                                    </div>
                                </form >
                            </div>



                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default SignUp;