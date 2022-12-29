import React from "react";
import Book from "./Book";
import { PropTypes } from "prop-types";
var Shelf = ({ updateShelf, booksInfo, shelf, titleName }) => {

    let booksShelf = booksInfo.filter(book => book.shelf === shelf);

        return(
            <div className="bookshelf">
      <h2 className="bookshelf-title">{titleName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksShelf.map((book) => (
            <div key={book.id}>
              <Book book={book} updateShelf={updateShelf} />
            </div>
          ))}
        </ol>
      </div>
    </div>
        )
};

Shelf.propTypes = {
    titleName: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired,
    booksInfo: PropTypes.array.isRequired,
};

export default Shelf;