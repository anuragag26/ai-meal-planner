const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      {/* Spinner */}
      <div className="w-14 h-14 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-4 text-gray-600 text-lg">
        AI is creating your personalized meal plan...
      </p>
    </div>
  );
};

export default Loader;
