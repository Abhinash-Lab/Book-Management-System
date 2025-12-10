import axios from "axios";
import { useNavigate } from "react-router-dom";

const SingleBookCard = ({id,bookName,bookPrice,bookAuthor,bookGenre})=>{
  const navigate = useNavigate();
  
  const goTOEditPage = ()=>{
    navigate(`/edit-page/${id}`)
  }
  const deleteBook = async()=>{
    await axios.delete(`http://localhost:5000/api/books/${id}`)
    navigate("/");
  }

  const goToHomepage = ()=>{
    navigate("/");
  }
  return(<>
  <div>
    <p>{bookName}</p>
    <p>{bookPrice}</p>
    <p>{bookAuthor}</p>
    <p>{bookGenre}</p>
    <button type="button" onClick={goTOEditPage}>Edit</button>
    <button type="button" onClick={deleteBook}>Delete</button>
    <div>
      <button type="button" onClick={goToHomepage}>Back to Home</button>
    </div>
  </div>
  </>)
}

export default SingleBookCard;