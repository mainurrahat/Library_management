import mongoose from "mongoose";
import { Server } from "http";
import dotenv from "dotenv";
import path from "path";
import app from "./App";

dotenv.config({ path: path.join(__dirname, "../.env") });

const port = process.env.PORT || 5000;
let server: Server;

// Get user and pass from environment
const user = process.env.DB_USER as string;
const pass = process.env.DB_PASS as string;

const uri = `mongodb+srv://${encodeURIComponent(user)}:${encodeURIComponent(
  pass
)}@cluster0.b8zct.mongodb.net/libraryDB?retryWrites=true&w=majority&appName=Cluster0`;

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB Atlas");

    server = app.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

main();
