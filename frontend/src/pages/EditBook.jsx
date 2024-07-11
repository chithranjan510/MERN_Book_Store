import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleUpdateBook = () => {
    const newBook = {
      title,
      author,
      publishYear,
    };

    setLoading(true);
    axios
      .put(`http://localhost:5000/api/books/${id}`, newBook)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((res) => {
        setLoading(false);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="title" className="text-xl mr-4 text-gray-500">
            Title
          </label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 text-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="author" className="text-xl mr-4 text-gray-500">
            Author
          </label>
          <input
            name="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 text-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">
            Publish Year
          </label>
          <input
            name="publishYear"
            type="number"
            min={1800}
            max={2024}
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 text-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 m-8 bg-sky-300" onClick={handleUpdateBook}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditBook;
