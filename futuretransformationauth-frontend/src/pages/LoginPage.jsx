import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import api from "../services/api";
import Navbar from "../components/Navbar";

function LoginPage() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/auth/login", loginData);

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", loginData.email);

            toast.success("Login Successful");

            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Invalid Credentials"
            );

        }

    };

    return (
        <>
            <Toaster position="top-right" />

            <Navbar />

            <div className="min-h-screen bg-slate-100 flex justify-center items-center">

                <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

                    <h2 className="text-3xl font-bold text-center mb-8">
                        Login
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={loginData.email}
                            onChange={handleChange}
                            className="w-full border rounded-xl px-4 py-3"
                            required
                        />

                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={handleChange}
                            className="w-full border rounded-xl px-4 py-3"
                            required
                        />

                        <button
                            id="loginButton"
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
                        >
                            Login
                        </button>

                    </form>

                    <p className="text-center mt-6">

                        Don't have an account?

                        <Link
                            to="/register"
                            className="text-blue-600 ml-2"
                        >
                            Register
                        </Link>

                    </p>

                </div>

            </div>

        </>
    );
}

export default LoginPage;