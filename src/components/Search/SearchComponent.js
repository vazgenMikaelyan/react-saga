import React from 'react';
import { ReactComponent as SearchIcon } from './search-icon.svg';

import './SearchComponent.css';
const SearchComponent = (props) => {

    const submitHandler = (e) => {
       e.preventDefault();
  //     props.onSubmit();
    };

    return(
        <form className="search-form" onSubmit={submitHandler}>
           <input  type="text" className="search-input"/>
           <button type="submit" className="search-button">
               <SearchIcon/>
           </button>
        </form>
    )
};
export default SearchComponent; 

