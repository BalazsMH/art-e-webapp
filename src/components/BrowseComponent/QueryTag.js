import React, {useContext} from 'react';
import styled from 'styled-components';
import {ArtBrowserContext} from './ArtBrowserContext';


export default function QueryTag(props) {

    const [key, value] = props.data;
    const [artData, isLoading, addQueryParam, query] = useContext(ArtBrowserContext);

    return (
        <Tag key={key}>
            {value}
            <span>X</span>
        </Tag>
    )
}
//TODO:create functional component from QueryTag, with ability to remove it.


const Tag = styled.div`
    border-radius: 20px;
    border:solid;
`;