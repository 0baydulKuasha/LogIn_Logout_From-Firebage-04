import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../../Firebase/Firebase";
import { useState } from "react";

const Regster = () => {
    const [registerErro, setRegisterErro]= useState("")
    const [success, setSuccess]=useState()
    const handleRegister = e => {
        e.preventDefault();
        console.log("i like you");
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // reset from
        setRegisterErro("")
        setSuccess(' ')

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {console.log(result.user); setSuccess('User Create Success')})
        .catch(error => {console.error(error); setRegisterErro(error.message);})
    }


    return (
        // <div  className="text-center bg-emerald-500">
        //     <h2>বাইচোদ রেজিস্টেশন কর</h2>

        //     <form onSubmit={handleRegister}>
        //         <label >Email:  <input className="mb-2 w-2/4 rounded" type="email" name="email" placeholder="Enter Your Email" /><br /> </label>

        //         <label > Password: <input className="mb-2 w-2/4 rounded" type="Password" name="password" id="" placeholder="Enter You Password" /></label>
        //         <input className="btn btn-secondary mb-2 w-2/4 rounded" type="submit" value="Submit" />
        //     </form>
        // </div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            registerErro && <p>{registerErro}</p>
                        }
                        {
                            success && <p>{success}</p>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Regster;