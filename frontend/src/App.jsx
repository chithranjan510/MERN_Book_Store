import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/book/details/:id" element={<ShowBook />} />
      <Route path="/book/edit/:id" element={<EditBook />} />
      <Route path="/book/delete/:id" element={<DeleteBook />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
