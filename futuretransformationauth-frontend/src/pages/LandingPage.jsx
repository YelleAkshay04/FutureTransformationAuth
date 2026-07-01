import Navbar from "../components/Navbar";
import PrimaryButton from "../components/PrimaryButton";
import {
  ShieldCheck,
  UserPlus,
  Lock,
  ArrowRight,
  BadgeCheck,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white">

      <Navbar />

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-8 pt-16 pb-24">

        <div className="grid lg:grid-cols-2 items-center gap-20">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold mb-8">

              <BadgeCheck size={18} />

              Secure • Reliable • Trusted

            </div>

            <h1 className="text-7xl font-extrabold leading-tight tracking-tight text-slate-900">

              Secure

              <br />

              <span className="text-blue-600">

                Authentication

              </span>

              <br />

              Portal

            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-600">

              A modern authentication platform developed for the

              Future Transformation QA Internship Assignment using

              <span className="font-semibold text-slate-700">

                {" "}Spring Boot, React, JWT and MySQL.

              </span>

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <Link to="/register">

                <PrimaryButton>

                  <div className="flex items-center gap-2">

                    <ArrowRight size={20} />

                    Get Started

                  </div>

                </PrimaryButton>

              </Link>

              <Link to="/login">

                <button
                  className="px-8 py-3 border-2 border-blue-600
                  rounded-xl font-semibold text-blue-600
                  hover:bg-blue-600 hover:text-white
                  transition duration-300"
                >

                  Login

                </button>

              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div
              className="w-[400px] h-[400px]
              rounded-full
              bg-blue-100
              flex
              items-center
              justify-center
              shadow-2xl"
            >

              <ShieldCheck
                size={200}
                className="text-blue-600"
              />

            </div>

          </div>

        </div>

      </section>
            {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-900">

            Powerful Authentication Features

          </h2>

          <p className="mt-4 text-xl text-gray-500">

            Everything you need for a secure authentication system.

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}

          <div
            className="bg-white rounded-3xl p-10
            shadow-lg hover:shadow-2xl
            transition duration-300"
          >

            <div
              className="w-16 h-16 rounded-full
              bg-blue-100 flex items-center justify-center mb-6"
            >

              <Lock
                size={32}
                className="text-blue-600"
              />

            </div>

            <h3 className="text-2xl font-bold">

              Secure Login

            </h3>

            <p className="mt-4 text-gray-500 leading-8">

              Passwords are encrypted using BCrypt and
              users authenticate securely using JWT Tokens.

            </p>

          </div>

          {/* Card 2 */}

          <div
            className="bg-white rounded-3xl p-10
            shadow-lg hover:shadow-2xl
            transition duration-300"
          >

            <div
              className="w-16 h-16 rounded-full
              bg-green-100 flex items-center justify-center mb-6"
            >

              <UserPlus
                size={32}
                className="text-green-600"
              />

            </div>

            <h3 className="text-2xl font-bold">

              User Registration

            </h3>

            <p className="mt-4 text-gray-500 leading-8">

              Strong frontend and backend validation ensures
              unique emails, secure passwords and clean data.

            </p>

          </div>

          {/* Card 3 */}

          <div
            className="bg-white rounded-3xl p-10
            shadow-lg hover:shadow-2xl
            transition duration-300"
          >

            <div
              className="w-16 h-16 rounded-full
              bg-purple-100 flex items-center justify-center mb-6"
            >

              <Shield
                size={32}
                className="text-purple-600"
              />

            </div>

            <h3 className="text-2xl font-bold">

              Protected Dashboard

            </h3>

            <p className="mt-4 text-gray-500 leading-8">

              Only authenticated users can access protected
              pages using JWT based authorization.

            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center">

          <div className="mt-6 md:mt-0 text-gray-400 text-center">

          </div>

        </div>

      </footer>

    </div>

  );
}

export default LandingPage;