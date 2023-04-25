import BookList from "./components/BookList";
import styles from "./App.module.css";
import { bookList } from "./books";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Best Seller in Books</h1>
      <BookList books={bookList} />
    </div>
  );
}

export default App;
