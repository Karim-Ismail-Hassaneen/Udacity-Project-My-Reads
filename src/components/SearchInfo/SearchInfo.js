import React  from "react";
import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";
import NavigatToHomeBtn from "./NavigatToHomeBtn";
import SearchShelf from "./SearchShelf";

const SearchInfo = ({ handleSearchData, searchData, updateShelf, readBooks }) => {
    return(
        <>
    <Helmet>
        <title>MyReads SearchPage</title>
        <link rel="canonical" href="/search" />
        <meta name="description"content="My Reads SerachPage" />
      </Helmet>
      <div className="search-books">
        <div className="search-books-bar">
          <NavigatToHomeBtn />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={searchData}
              placeholder="Search by title, author, or ISBN"
              onChange={handleSearchData}
            />
          </div>
        </div>
        <SearchShelf
          searchData={searchData}
          readBooks={readBooks}
          updateShelf={updateShelf}
        />
      </div>
    </>
    )
}
SearchInfo.propTypes = {
    handleSearchData: PropTypes.func.isRequired,
    searchData: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired,
    readBooks: PropTypes.array.isRequired };
export default SearchInfo;