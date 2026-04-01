const AuthButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
    >
      {text}
    </button>
  );
};

export default AuthButton;
