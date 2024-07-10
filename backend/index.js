import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(json());
app.use(urlencoded({ extended: true }));

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
