import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    return (

        <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

                {/* Logo */}

                <div>

                    <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">

                        Future Transformation

                    </h1>

                    <p className="text-gray-500 text-sm mt-1">

                        Secure Authentication Portal

                    </p>

                </div>

                {/* Navigation */}

                <div className="flex items-center gap-10 text-lg font-medium">

                    <Link
                        to="/"
                        className={`transition duration-300 hover:text-blue-600 ${
                            location.pathname === "/"
                                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                                : "text-gray-700"
                        }`}
                    >
                        Home
                    </Link>

                    <Link
                        to="/register"
                        className={`transition duration-300 hover:text-blue-600 ${
                            location.pathname === "/register"
                                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                                : "text-gray-700"
                        }`}
                    >
                        Register
                    </Link>

                    <Link
                        to="/login"
                        className="px-6 py-2 border-2 border-blue-600 rounded-xl
                        text-blue-600 hover:bg-blue-600 hover:text-white
                        transition duration-300"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;