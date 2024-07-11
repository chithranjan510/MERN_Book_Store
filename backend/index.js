import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

// cors middleware
// app.use(cors())  // this allows all websites to access our API

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing
app.use("/api/books", bookRoute);

app.get("/", (req, res) => {
  res.send("<h1>Welcome👋</h1>");
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
