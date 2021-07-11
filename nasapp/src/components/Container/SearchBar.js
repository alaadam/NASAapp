import React from 'react';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const SearchBar = (props) => {

    const updateSearch = (event) => props.setSearchWord(event.target.value)

    const getSearchedWord = () => props.getSearchedWord()

    return (
        <InputGroup className="mb-3">
            <FormControl
                onChange={updateSearch}
                value={props.searchWord}
                type="text"
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="info" onClick={getSearchedWord}>Search</Button>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default SearchBar;


