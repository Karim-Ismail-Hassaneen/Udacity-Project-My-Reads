import React from "react";
import { PropTypes } from "prop-types";
import BookShelf from "./BookShelf";

let Book = ({ updateShelf, book }) => {
    return(
        <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: book.imageLinks && `url(${book.imageLinks.thumbnail})`,}}>
          </div>
          <div className="book-shelf-changer">
            <BookShelf book={book} updateShelf={updateShelf} />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join()}</div>
      </div>
    </li>
    )
};


 Book.propTypes = {
  updateShelf: PropTypes.func.isRequired,
 book: PropTypes.object.isRequired };

export default Book;