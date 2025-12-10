import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleBookCard from "../reusable_component/SingleBookCard";

const SinglePage = () => {

  const [singleBook,setSingleBook] = useState({})
  const { id } = useParams();
  const fetchSingleBook = async () => {
    const response = await axios.get(`http://localhost:5000/api/books/${id}`);
    setSingleBook(response.data.singleBook);
  };
  useEffect(() => {
    fetchSingleBook();
  }, []);
  return (<>
  <SingleBookCard {...singleBook}/>
  </>);
};

export default SinglePage;
