import React from 'react';
import Media from './Media'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const MediaCard = (props) => {

    let [buttonText, setButtonText] = useState("Like")

    const changeText = (text) => setButtonText(text);

    const displayHome = () => <p> {props.explanation} </p>

    const createFavouriteObj = function () {
        return ({
            title: props.title, description: props.description,
            imgURL: props.mediaURL
        })
    }

    const postFavourites = (event) => {
        if (buttonText === "Like") {
            props.postFavourites(createFavouriteObj())
            changeText('Unlike')
        }
    }

    const deleteFavourites = () => props.deleteFavourites(props.id)

    const renderSearchComp = () => <Button variant="dark" onClick={postFavourites}> {buttonText} </Button>

    const renderFavsComp = () => <Button variant="dark" onClick={deleteFavourites}>Unlike</Button>

    const renderFavComp = () => (props.origin === 'favourite' ? renderDesComp() : renderFavsComp())

    const renderDesComp = () => {
        return (
            <div>
                <div>{props.description}</div>
                <Button variant="dark" onClick={deleteFavourites}>Unlike</Button>
                <Link to="/favourites"><Button variant="dark">Back</Button></Link>
            </div>)
    }

    const displayCard = () => (props.origin === 'search' ? renderSearchComp() : renderFavComp())

    const displayMedia = () => <Media media_type={props.media_type} mediaURL={props.mediaURL} />

    return (
        <Card className="text-center">
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                {props.origin === "favourites" ?
                    <Link to={`/favourites/${props.id}`}> {displayMedia()} </Link> :
                    <div>{displayMedia()}</div>
                }
            </Card.Body>

            <div>{props.origin === "home" ? displayHome() : displayCard()}</div>
        </Card >
    );
};

export default MediaCard;