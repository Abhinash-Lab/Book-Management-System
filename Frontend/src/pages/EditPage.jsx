import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [singleBook, setSingleBook] = useState({
    bookName: "",
    bookPrice: "",
    bookAuthor: "",
    bookGenre: "",
  });
  const getSingleBook = async () => {
    const response = await axios.get(`http://localhost:5000/api/books/${id}`);
    console.log(response.data.singleBook);
    setSingleBook(response.data.singleBook);
  };

  const handleChange = (event) => {
    setSingleBook({
      ...singleBook,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.patch(`http://localhost:5000/api/books/${id}`, singleBook);
    setSingleBook({
      bookName: "",
      bookPrice: "",
      bookAuthor: "",
      bookGenre: "",
    });
    navigate("/");
  };
  useEffect(() => {
    getSingleBook();
  }, [id]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookName">Book Name:</label>
        <input
          type="text"
          id="bookName"
          name="bookName"
          value={singleBook.bookName}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="bookPrice">Book Price:</label>
        <input
          type="number"
          id="bookPrice"
          name="bookPrice"
          value={singleBook.bookPrice}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="bookAuthor">Book Author:</label>
        <input
          type="text"
          id="bookAuthor"
          name="bookAuthor"
          value={singleBook.bookAuthor}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="bookGenre">Book Genre:</label>
        <input
          type="text"
          id="bookGenre"
          name="bookGenre"
          value={singleBook.bookGenre}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditPage;
