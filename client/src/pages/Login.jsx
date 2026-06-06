import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {

        setError(data.message);

      } else {

        /* Save User in Context */
        login(data);

        /* Redirect to Dashboard */
        navigate("/dashboard");
      }

    } catch (error) {

      setError("Something went wrong");

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-blue-900 font-semibold hover:underline"
        >
          ← Back to Home
        </button>

        <h1 className="text-6xl font-bold text-center text-blue-900 mb-10">
          Login
        </h1>

        {error && (
          <div className="bg-red-100 text-red-600 p-5 rounded-2xl mb-8 text-xl">
            {error}
          </div>
        )}

        <form onSubmit={submitHandler}>

          {/* Email */}
          <div className="mb-8">

            <label className="block text-2xl font-semibold mb-4">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-2xl px-6 py-5 text-xl outline-none focus:border-blue-900"
              required
            />

          </div>

          {/* Password */}
          <div className="mb-10">

            <label className="block text-2xl font-semibold mb-4">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-2xl px-6 py-5 text-xl outline-none focus:border-blue-900"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-5 rounded-2xl text-2xl font-bold hover:bg-blue-800 transition"
          >
            Login
          </button>

        </form>

        {/* Register Redirect */}
        <p className="text-center mt-8 text-lg">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-900 font-bold hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;