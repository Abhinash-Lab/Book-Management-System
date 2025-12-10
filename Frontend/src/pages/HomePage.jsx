import { NavLink } from "react-router-dom";
import styles from "../css/main_css/home-page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../reusable_component/BookCard";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:5000/api/books/");
    setBooks(response.data.datas);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  console.log(books);
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">Logo</NavLink>
          </li>
          <li>
            <NavLink to="/create-page">
              <b>+</b> Create
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className={styles.bookListSection}>
        <h2>Available Book List</h2>
        <div className={styles.bookList}>
          <div className={styles.bookLists}>
            {books.map((book) => {
              return <BookCard key={book.id} {...book} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
