import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';


export default function LoadingSpinner() {
    return (
        <BounceLoader color={"gray"} loading={true} size={100}></BounceLoader>
    )
}
