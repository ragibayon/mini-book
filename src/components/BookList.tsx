import { BookType } from "./Book.type";
import Book from "./Book";
import style from "./BookList.module.css";

type BookListProps = {
  books: BookType[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <section className={style.booklist}>
      {books.map((book, index) => {
        return (
          <Book
            key={index}
            imageURL={book.imageURL}
            bookTitle={book.bookTitle}
            authorName={book.authorName}
          />
        );
      })}
    </section>
  );
};

export default BookList;
