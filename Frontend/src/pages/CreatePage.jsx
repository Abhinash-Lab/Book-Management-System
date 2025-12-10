import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const CreatePage = () => {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    bookName: "",
    bookPrice: "",
    bookAuthor: "",
    bookGenre: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:5000/api/books", formData);
    setFormData({
      bookName: "",
      bookPrice: "",
      bookAuthor: "",
      bookGenre: "",
    });
    alert("Book posted successfully");
  };

  const goHome = ()=>{
    navigate("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookName">Book Name:</label>
        <input
          type="text"
          id="bookName"
          name="bookName"
          value={formData.bookName}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="bookPrice">Book Price:</label>
        <input
          type="number"
          id="bookPrice"
          name="bookPrice"
          value={formData.bookPrice}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="bookAuthor">Book Author:</label>
        <input
          type="text"
          id="bookAuthor"
          name="bookAuthor"
          value={formData.bookAuthor}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="bookGenre">Book Genre:</label>
        <input
          type="text"
          id="bookGenre"
          name="bookGenre"
          value={formData.bookGenre}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
      <button onClick={goHome}>Go Home</button>
    </>
  );
};

export default CreatePage;
