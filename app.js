const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
const userRouter = require("./routes/userRoute");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/users", userRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
});
