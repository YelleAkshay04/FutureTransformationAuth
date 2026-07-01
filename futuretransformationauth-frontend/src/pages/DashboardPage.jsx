import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function DashboardPage() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    useEffect(() => {

        if (!token) {
            navigate("/login");
        }

    }, [token, navigate]);

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("email");

        navigate("/login");

    };

    return (

        <>

            <Navbar />

            <div className="min-h-screen bg-slate-100 flex justify-center items-center">

                <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl">

                    <h1 className="text-4xl font-bold text-blue-600 mb-8">
                        Dashboard
                    </h1>

                    <div className="space-y-4">

                        <div className="border rounded-lg p-4 bg-gray-50">

                            <h3 className="font-semibold text-gray-700">
                                Logged-in User
                            </h3>

                            <p className="text-lg font-semibold text-blue-600">
                                {email || "No user logged in"}
                                </p>


                        </div>

                        <div className="border rounded-lg p-4 bg-gray-50">

                            <h3 className="font-semibold text-gray-700">
                                Current Route
                            </h3>

                            <p className="text-lg text-blue-600">
                                /dashboard
                            </p>

                        </div>

                        <div className="border rounded-lg p-4 bg-green-50">

                            <h3 className="font-semibold text-green-700">
                                Authentication Status
                            </h3>

                            <p className="text-green-600">
                                ✅ Logged In Successfully
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={logout}
                        className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </>

    );

}

export default DashboardPage;