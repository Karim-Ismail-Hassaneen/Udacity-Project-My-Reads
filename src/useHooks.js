import { useState, useEffect } from "react";
import { search } from "./BooksAPI";
import { useDebounce } from "use-debounce";


const useHooks = searchData => {
    const [searchBookData, setSearchBookData] = useState([]);
    const [valueSearch] = useDebounce(searchData, 500);
    useEffect(() => {
      let isActive = true;
      if (valueSearch) {
        search(valueSearch).then((data) => {
          if (data.error) {
            setSearchBookData([]);
          } else {
            if (isActive) {
              setSearchBookData(data);
            }
          }
        });
      }
      return _ => {
        isActive = false;
        setSearchBookData([]);
      };
    }, [valueSearch]);
    return [searchBookData, setSearchBookData];
  };
  
  export default useHooks;