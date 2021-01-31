import React from 'react';
import { useParams } from 'react-router-dom';

export default function ArtDetails() {
    let {id} = useParams();

    return (
        <div>
            Heeloo, id : {id}
        </div>
    )
}
