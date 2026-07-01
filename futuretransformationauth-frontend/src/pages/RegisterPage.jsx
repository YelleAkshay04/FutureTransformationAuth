import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import api from "../services/api";
import Navbar from "../components/Navbar";

function RegisterPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/auth/register", formData);

            toast.success(response.data.message);

            setTimeout(() => {
                navigate("/login");
            }, 1500);

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Registration Failed"
            );

        }

    };

    return (
        <>
            <Toaster position="top-right" />

            <Navbar />

            <div className="min-h-screen bg-slate-100 flex items-center justify-center">

                <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

                    <h2 className="text-3xl font-bold text-center mb-8">
                        Register
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-xl px-4 py-3"
                        />

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-xl px-4 py-3"
                        />

                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-xl px-4 py-3"
                        />

                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-xl px-4 py-3"
                        />

                        <button
                            id="registerButton"
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                        >
                            Create Account
                        </button>

                    </form>

                    <p className="text-center mt-6">

                        Already have an account?

                        <Link
                            to="/login"
                            className="text-blue-600 ml-2"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </>
    );
}

export default RegisterPage;