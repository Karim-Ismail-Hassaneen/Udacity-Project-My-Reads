import React from "react";
import { useDeferredValue } from "react";
import { PropTypes } from "prop-types";
import Book from "../HomeInfo/Book";

const SearchShelf = ({ updateShelf, searchData, readBooks }) => {
    let noData = <div className="no-data">No Data Found!!</div>;

    let deferredReadBooks = useDeferredValue(readBooks);
        return(
            <div className="search-books-results">
            <ol className="books-grid">
              {deferredReadBooks && searchData
                ? deferredReadBooks.map((book) => {
                    return (
                      <Book
                        key={book.id}
                        book={book}
                        updateShelf={updateShelf}
                      />
                    );
                  })
                : noData}
            </ol>
          </div>
        )
};
SearchShelf.propTypes = {
updateShelf: PropTypes.func.isRequired,
readBooks: PropTypes.array.isRequired,
searchData: PropTypes.string.isRequired };

export default SearchShelf;