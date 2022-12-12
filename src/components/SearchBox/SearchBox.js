import React, { Component } from 'react';
import { useState } from 'react';
import './SearchBox.css';

const SearchBox = (props) => {

    const {setsearch} = props

    const [state, setState] = useState({
        searchLine: '',
        
    })

// const searchFilms = (e) =>{
//     setState()
// }
    const searchLineChangeHandler = (e) => {
        setState({ ...state, searchLine: e.target.value });
        setsearch(e.target.value)
      
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }

    const { searchLine } = state;

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                    // onClick={searchFilms}
                >
                    Искать
                </button>
            </form>
        </div>
    );

}

export default SearchBox;