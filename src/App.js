import React from 'react'
import './css/App.css';
import Error from './Error';
import HomeInfo from './components/HomeInfo/HomeInfo';
import SearchInfo from './components/SearchInfo/SearchInfo';
import { getAll, update } from './BooksAPI';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import useHooks from './useHooks';

const App = _ => {

  let [booksInfo, setBooksInfo] = useState([]);
  let [searchData, setSearchData] = useState("");
  let [readBooks, setReadBooks] = useState([]);
  let [idBooks, setIdBooks] = useState(new Map());
  let [searchBookData] = useHooks(searchData);

  let getAllBooksData = async _ => {
    await getAll().then((vlu) => {
      setBooksInfo(vlu); 
      setIdBooks(createMapOfBooks(vlu));
  });
};
  let updateShelf = async (shelf, book) => {
    await update(shelf, book);
     getAllBooksData();
    };
  let handleSearchData = e => {
    const inputValue = e.target.value; 
    setSearchData(inputValue);
  };

  useEffect( _ => {
   var booksShelf = searchBookData.map(book => {
    if (idBooks.has(book.id)) {
      return idBooks.get(book.id);
    } else {
      return book;
    }
    });
    setReadBooks(booksShelf)}, [searchBookData ,idBooks]);
    let createMapOfBooks = books => {
      const map = new Map();
      books.map(book => map.set(book.id, book));
      return map;
    };

    useEffect( _ => {getAllBooksData()});

  return (
    <div className='app'>
      <Routes>
      <Route path="/searchInfo" element={ <SearchInfo readBooks={readBooks} searchData={searchData} handleSearchData={handleSearchData} updateShelf={updateShelf} /> } />  
      <Route path="/" element={ <HomeInfo booksInfo={booksInfo} updateShelf={updateShelf} />} />
      <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
};

export default App