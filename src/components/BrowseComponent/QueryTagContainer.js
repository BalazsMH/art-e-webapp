import React, {useContext} from 'react';
import styled from 'styled-components';
import QueryTag from './QueryTag';
import {ArtBrowserContext} from './ArtBrowserContext';



export default function QueryTagContainer() {
    const [artData, isLoading, addQueryParam, query] = useContext(ArtBrowserContext);


    return (
        <div>
            {Object.entries(query).map(([key, value]) => {
            if(value) return <QueryTag data={[key, value]}></QueryTag> 
        })}
        </div>
    )
}


