import { NavLink } from "react-router-dom";
import styles from "../css/reusable_component_css/book-card.module.css";

const BookCard = ({id,bookName, bookPrice, bookAuthor, bookGenre }) => {
  return (
    <>
      <article className={styles.bookCard}>
        <div className={styles.bookDetails}>
          <p>Book Name: {bookName}</p>
          {/* <p>Book Price: {bookPrice}</p> */}
          <p>Book Author: {bookAuthor}</p>
          <p>Book Genre: {bookGenre}</p>
        </div>
        <div className={styles.viewDetails}> 
         <NavLink to={`/single-page/${id}`}>View Details</NavLink>
        </div>
      </article>
    </>
  );
};

export default BookCard;
