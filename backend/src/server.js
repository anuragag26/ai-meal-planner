import "./loadEnv.js"; // 🔥 MUST be first import

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect DB
    await connectDB();

    // Check critical env variables
    if (!process.env.JWT_SECRET) {
      console.error("❌ JWT_SECRET is missing in .env");
      process.exit(1);
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log("✅ MongoDB connected");
      console.log("🔐 JWT authentication enabled");
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error);
    process.exit(1);
  }
};

startServer();

