import React from 'react';
import axios from "axios"
import MediaCard from './MediaCard';
import { useState, useEffect } from 'react';
import configData from '../../config.json'

const Home = () => {

    let [photoOfDay, setPhotoOfDay] = useState({ explanation: "", title: "", url: '', media_type: '' })

    useEffect(() => {
        async function fetchData() {
            let content = await getAPOD()
            setPhotoOfDay(content.data)
        }
        fetchData();
    }, []);

    const getAPOD = async () => {
        return axios.get(configData.NASAPI)
    }

    return (
        <div>
            <MediaCard title = {photoOfDay.title}
                mediaURL = {photoOfDay.url}
                media_type = {photoOfDay.media_type}
                explanation = {photoOfDay.explanation}
                origin = 'home' />
        </div>
    );
};

export default Home;