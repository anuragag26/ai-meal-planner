import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthFormWrapper from "../../components/auth/AuthFormWrapper";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import { registerUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ correct usage

  const [form, setForm] = useState({
    name: "",
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

      const res = await registerUser(form);

      // ✅ ONLY pass token (AuthContext handles storage)
      login(res.user, res.token);

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthFormWrapper title="Create Account">
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthInput
          type="text"
          placeholder="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

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

        <AuthButton text={loading ? "Creating..." : "Register"} />

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600">
            Login
          </Link>
        </p>
      </form>
    </AuthFormWrapper>
  );
};

export default Register;
