import React from 'react'
import { PropTypes } from 'prop-types'
let BookShelf = ({ updateShelf, book }) => {
     let updateBookShelf = e => {
        const value = e.target.value;
        updateShelf(book, value)};
  return (
        <select
         value={book.shelf ? book.shelf : "none"}
         onChange={updateBookShelf}
         >
      <option value="move" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option>None</option>
    </select>
    
  )
}

BookShelf.propTypes = {
updateShelf: PropTypes.func.isRequired,
book: PropTypes.object.isRequired};


export default BookShelf