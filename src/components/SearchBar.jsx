import React from 'react'

const SearchBar = ({onChange,value}) => {


    return ( 
        <form className="d-flex" >
            <input className="form-control"
                type="text"
                name="query"
                value={value}
                onChange={onChange}
                placeholder="Search"
                autoFocus/>
        </form>
     );
}
 
export default SearchBar;