import React, {useState} from 'react';

export default function ArtCard(props) {

    const [artDetails, setArtDetails] = useState(props.data);
    const [hasImage, setHasImage] = useState(props.data.hasImage);

    return (
        <div>{artDetails.title}
            
        </div>
    )
}
 