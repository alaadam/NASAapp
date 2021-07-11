import React from 'react';
import MediaCard from './MediaCard'
import SearchBar from './SearchBar'
import axios from 'axios'
import { useState } from 'react';
import configData from '../../config.json'

const Search = () => {

    let [searchWord, setSearchWord] = useState('')
    let [savedResults, setSavedResults] = useState([])

    const getSearchedWord = async () => {
        let content = await axios.get(`https://images-api.nasa.gov/search?q=${searchWord}`)
        setSavedResults(content.data.collection.items)
    }
    
    const getMediaLink = (data) => data === undefined ? "" : data[configData.FIRSTINDEX].href

    const postFavourites = async (favourites) => axios.post(configData.ROUTEAPI, favourites) 
    let counter = 0
    const generateKeyID = () => {
        counter++
        return counter
    }
    return (
        <div>
            <SearchBar setSearchWord={setSearchWord} getSearchedWord={getSearchedWord} />
            {savedResults.map(content => <MediaCard
                key={generateKeyID()}
                title={content.data[configData.FIRSTINDEX].title}
                mediaURL={getMediaLink(content.links)}
                media_type={content.data[configData.FIRSTINDEX].media_type}
                description={content.data[configData.FIRSTINDEX].description}
                postFavourites={postFavourites}
                origin='search' />)
                }
        </div>
    );
};

export default Search;