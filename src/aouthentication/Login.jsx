import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "./AouthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)

    useEffect(()=> {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (e)=> {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            console.log(result.user)
        })
    }

    const handleCaptcha = ()=> {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }

    const handleGoogleLogin = ()=> {

    }
    return (
        <div>
            <Helmet><title>Bistro Boss | Login</title></Helmet>
            <div>
                <h2 className="text-3xl font-bold text-center mt-6">Login your account</h2>
                <div className="max-w-lg mx-auto bg-base-200 p-10 shadow-xl rounded-xl">
                    <form onSubmit={handleLogin}>
                        <button type="button"
                            onClick={handleGoogleLogin}
                            className="px-4 py-2 rounded-lg w-full border border-blue-300 flex justify-center items-center gap-6">
                            <p className="text-2xl"><FcGoogle /></p>
                            <h4 className="font-semibold">Login with Google</h4>
                        </button>
                        <div>
                            <h3 className="text-lg font-semibold mt-4">Email:</h3>
                            <input type="email" name="email" placeholder="email"
                                className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mt-4">Password:</h3>
                            <input type="password" name="password" placeholder="password"
                                className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                            <p className="text-sm">Forgot Password?</p>
                        </div>
                        <div className="mt-4">
                            <LoadCanvasTemplate />
                            <input type="text" ref={captchaRef} name="captcha" placeholder="type the text avobe"
                                className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                                <button onClick={handleCaptcha} className="btn btn-outline btn-xs w-full mt-2">Validate</button>
                        </div>
                        <div>
                            <input disabled={disable} type="submit" value="Login" className="btn btn-primary w-full mt-6" />
                        </div>
                        <p className="text-center mt-6">
                            Dont have an account? <Link className="text-blue-700 font-bold" to='/register'>Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;