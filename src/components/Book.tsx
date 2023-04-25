import style from "./Book.module.css";
import { BookType } from "./Book.type";

const Book = ({ imageURL, authorName, bookTitle }: BookType) => {
  return (
    <article className={style.book}>
      <img
        src={imageURL}
        alt={`${bookTitle} by ${authorName}`}
        className={style.image}
      />
      <p className={style.title}>{bookTitle}</p>
      <p>{authorName}</p>
    </article>
  );
};

export default Book;
