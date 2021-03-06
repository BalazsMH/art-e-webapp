import React, {useContext} from 'react';
import QueryTag from './QueryTag';
import {ArtBrowserContext} from './ArtBrowserContext';
import {QueryTagBox} from '../Styles';

export default function QueryTagContainer() {
    const {query} = useContext(ArtBrowserContext);

    return (
        <QueryTagBox>
            {
                Object.entries(query)
                .map(([key, value]) => {
                    if (value) return <QueryTag key={key} data={[key, value]}></QueryTag> 
                    else return null;
                })
            }
        </QueryTagBox>
    )
}
