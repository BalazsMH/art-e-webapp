import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ArtDetails() {
    let {objectNumber} = useParams();
    const [pictureData, setPictureData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios({
            method: 'GET',
            url:`https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=Gz1ZRsyI&format=json`
            // url:'http://localhost:8080/api/getArtData',
            // params: {culture: "en",
            //         "object-number": id
            //         }
        }).then(res => {
            console.log(res);
            setPictureData(res.data.artObject);
            setIsLoading(false);
        })
        .catch(e => {
            console.log(e);
        })

    }, [])

    if (isLoading) {
        return <div>Please wait</div>
    }
    return (
        <div><img alt={pictureData.title} src={pictureData.webImage.url}></img>
            <h1>{pictureData.longTitle}</h1>
        </div>
    )
}
