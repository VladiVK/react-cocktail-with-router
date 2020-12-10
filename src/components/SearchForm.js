import React, {useRef, useEffect} from 'react'
import {useGlobalContext} from '../context'

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const searchValue = useRef('');
    
    useEffect( () => {
        searchValue.current.focus();
    }, [])

    const searchCocktail = () => {
        console.log(searchValue.current.value);
        setSearchTerm(searchValue.current.value)
    }
    
    //if user press ENTER nothing will happen
    const handleSUbmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className='section search'>
            <form className="search-form" onSubmit={handleSUbmit}>
                <div className="form-control">
                    <label htmlFor="name">search your cocktail</label>
                    <input
                     type="text"
                     id="name"
                     ref={searchValue}
                     onChange={searchCocktail}
                     />
                </div>
            </form>
        </section>
    )
}

export default SearchForm
