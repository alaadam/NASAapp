import React from 'react';
import MediaCard from './MediaCard'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react';
import configData from '../../config.json'


const Favourites = (props) => {

    let [savedResults, setSavedResults] = useState([]) 


    useEffect(() => {
        async function fetchData() {
          await updateFavourite()
        }
        fetchData();
      }, );


    const getFavourites = async () => axios.get(configData.ROUTEAPI)

    const getFavouriteById = (favouriteId) => {
        return savedResults.find(res => res._id === favouriteId)
    }

    const deleteFavourites = async (id) => {
        await axios.delete(configData.ROUTEAPI, { data: { id } })
        await updateFavourite()
    }

    const updateFavourite = async () => {
        let content = await getFavourites()
        setSavedResults(content.data)
    }

    const renderAllFavourites = () => {
        return (
            <div>
                {savedResults.map(favourite => <MediaCard
                    key={favourite._id}
                    id={favourite._id}
                    title={favourite.title}
                    mediaURL={favourite.imgURL}
                    media_type='image'
                    description={favourite.description}
                    deleteFavourites={deleteFavourites}
                    origin='favourites' />)}
            </div>
        )
    }

    const renderOneFavourie = (selected) => {
        return (<div>
            <MediaCard
                id={selected._id}
                title={selected.title}
                mediaURL={selected.imgURL}
                media_type='image'
                description={selected.description}
                deleteFavourites={deleteFavourites}
                origin='favourite' />
        </div>)
    }

    const renderFavourites = () => {
        if (!props.match) {
            return (renderAllFavourites())
        }
        else {
            let selected = getFavouriteById(props.match.params.id)
            if (savedResults.length === 0) {
                return <h1>No Favourites</h1>
            }
            else if (selected === undefined) {
                return <Redirect to='/favourites' />
            }
            else
                return (renderOneFavourie(selected))
        }
    }

    return (
        <div>
            {renderFavourites()}
        </div>
    )
}

export default Favourites;