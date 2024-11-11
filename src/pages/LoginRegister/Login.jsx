import { useState } from "react";
import { useAuth } from "../../lib/AuthContext";
import { useNavigate } from "react-router-dom";
import Guru1 from "../../assets/Guru1.png";
import { Book } from "lucide-react";

const Login = () => {
  const { isLogin, setIsLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", email, password, "Role:", role);
      navigate(role === "teacher" ? "/dashboard-mentor" : "/dashboard-student");
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Registering with:", name, email, password, "Role:", role);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Gambar Kiri */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={Guru1}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Login */}
        <div className="w-full md:w-1/2 p-6">
          <div className="flex flex-col gap-3 justify-center items-center space-x-3 mb-10">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Book className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl text-paragraf-secondary font-bold">
              KitaBisa Mengajar
            </h1>
          </div>
          <h2 className="text-3xl font-bold text-center mb-6">
            {/* {isLogin ? "Login" : "Register"} */}
          </h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            )}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
            {!isLogin && (
              <div className="mb-3">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
            )}
            {/* Pilihan Peran */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-600">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              >
                <option value="student">Murid</option>
                <option value="teacher">Guru</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
          <p className="mt-4 text-center">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-500 hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-500 hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
