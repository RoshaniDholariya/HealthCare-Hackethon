const express = require("express");
const authRoutes = require("./routes/authRoute");
const detailsRoutes = require("./routes/detailsRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",  
  credentials: true,
}));


// Define routes
app.use("/auth", authRoutes);
app.use("/details", detailsRoutes);

// Set up the port (default to 5000 if not set)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
