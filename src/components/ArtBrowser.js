import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ArtCard from './ArtCard';


export default function ArtBrowser() {
    const [artData, setArtData] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        axios.get("https://www.rijksmuseum.nl/api/en/collection?key=Gz1ZRsyI&format=json")
        .then(res => setArtData(res.data.artObjects))
        .then(setIsloading(!isLoading))
        .then(console.log("Load complete.."));

    }, [])

    if (isLoading) {
        return (

            <div>Please wait..</div>
        )
    }

    return (
        <div>{artData.map((artPiece, key) => (
        <ArtCard data={artPiece} key={key}></ArtCard>
        ))}
        </div>
    )
}
