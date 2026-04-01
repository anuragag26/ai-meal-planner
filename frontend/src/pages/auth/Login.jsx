import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthFormWrapper from "../../components/auth/AuthFormWrapper";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext"; // ✅ ADD THIS

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ USE CONTEXT

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await loginUser(form);

      // ✅ Centralized auth handling
      login(res.user, res.token);

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthFormWrapper title="Login">
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <AuthInput
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <AuthButton text={loading ? "Logging in..." : "Login"} />

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600">
            Register
          </Link>
        </p>
      </form>
    </AuthFormWrapper>
  );
};

export default Login;
