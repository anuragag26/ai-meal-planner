const AuthInput = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      name={name}            // ✅ THIS WAS MISSING
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
};

export default AuthInput;
