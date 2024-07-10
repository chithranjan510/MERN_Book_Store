import Book from "../models/book.model.js";

export const getAllBoooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    if (!res.body.title || !res.body.author || !res.body.publishYear) {
      const message = !res.body.title
        ? "title field cannot be empty"
        : !res.body.author
        ? "author field cannot be empty"
        : "publish year field cannot be empty";
      return res.status(400).json({ message: message });
    }
    res.status(200).json({ message: "Book added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
