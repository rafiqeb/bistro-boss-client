import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "./AouthProvider";


const Register = () => {
    const {creatUser} = useContext(AuthContext)

    const handleRegister = (e)=> {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        creatUser(email, password)
        .then(result => {
            console.log(result.user);
        })
    }
    return (
        <div>
            <Helmet><title>Bistro Boss | Registration</title></Helmet>
            <div>
                <h2 className="text-3xl font-bold text-center mt-6">Register your account</h2>
                <div className="max-w-lg mx-auto bg-base-200 p-10 shadow-xl rounded-xl">
                    <form onSubmit={handleRegister}>
                        <div>
                            <h3 className="text-lg font-semibold">Name:</h3>
                            <input type="text" name="name" placeholder="name"
                                className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mt-4">Email:</h3>
                            <input type="email" name="email" placeholder="email"
                                className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mt-4">Photo:</h3>
                            <input type="text" name="photo" placeholder="photo url"
                                className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                        </div>
                        <div className="relative">
                            <h3 className="text-lg font-semibold mt-4">Password:</h3>
                            <input type="password" name="password" placeholder="password"
                                className="px-4 py-2 rounded-lg w-full border border-blue-300" />
                        </div>
                        <div>
                            <input type="submit" value="Register" className="px-4 py-2 rounded-lg w-full bg-blue-700 text-white font-semibold mt-6" />
                        </div>
                        <p className="text-center mt-6">
                            Already have an account? Please <Link className="text-blue-700 font-bold" to='/login'>Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;