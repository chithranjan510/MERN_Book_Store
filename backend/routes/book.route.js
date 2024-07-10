import express from "express";
import {
  addBook,
  deleteBook,
  getAllBoooks,
  getBookById,
  updateBook,
} from "../controllers/book.controller.js";

const bookRoute = express.Router();

bookRoute.get("/", getAllBoooks);

bookRoute.get("/:id", getBookById);

bookRoute.post("/", addBook);

bookRoute.put("/:id", updateBook);

bookRoute.delete("/:id", deleteBook);

export default bookRoute;
