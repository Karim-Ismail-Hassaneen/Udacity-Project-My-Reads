import React from "react";
import { Helmet } from "react-helmet-async";
import NavigatToSearchBtn from './NavigatToSearchBtn';
import Shelf from "./Shelf";

var HomeInfo = ({ updateShelf, booksInfo }) => {
    return(
    <>
        <Helmet>
         <title>Udacity-Project-MyReads</title>
        <link rel="canonical" href="/" />
        <meta name="description"content="Udacity-Project-MyReads"/>
      </Helmet>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* Books shelves */}
            <Shelf updateShelf={updateShelf} booksInfo={booksInfo}  titleName="Currently Reading" shelf="currentlyReading" />
            <Shelf updateShelf={updateShelf} booksInfo={booksInfo}  titleName="Want To Read" shelf="wantToRead" />
            <Shelf updateShelf={updateShelf} booksInfo={booksInfo}  titleName="Read" shelf="read" />
          </div>
        </div>
        <NavigatToSearchBtn />
      </div>
    </>
    )
};


  
export default HomeInfo;