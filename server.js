import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from React build
app.use(express.static(path.join(process.cwd(), "dist")));

// API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// All other routes → serve React app
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
