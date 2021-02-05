import React, {useContext} from 'react';
import {ArtBrowserContext} from './ArtBrowserContext';
import { Tag, RemoveButton } from '../Styles.js';

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
