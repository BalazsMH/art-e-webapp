import React, {useContext} from 'react';
import styled from 'styled-components';
import {ArtBrowserContext} from './ArtBrowserContext';


export default function QueryTag(props) {

    const [key, value] = props.data;
    const {setQueryParam, query} = useContext(ArtBrowserContext);

    const removeTag = (e, key) => {
        console.log(key);
        setQueryParam({...query, ...{[key]: undefined}});
    }

    return (
        <Tag key={key}>
            {value}
            <RemoveButton onClick={(e)=> {removeTag(e, key)}}>X</RemoveButton>
        </Tag>
    )
}
//TODO:create functional component from QueryTag, with ability to remove it.


const Tag = styled.div`
    border-radius: 20px;
    border:solid;
`;

const RemoveButton = styled.span`
    cursor: pointer;
`;