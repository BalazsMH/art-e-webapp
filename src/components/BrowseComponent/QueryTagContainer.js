import React from 'react';
import styled from 'styled-components';

export default function QueryTagContainer(props) {
    return (
        <div>
            {Object.entries(props.query).map(([key, value]) => {
            if(value) return <QueryTag key={key}>{value}</QueryTag> 
        })}
        </div>
    )
    //TODO:create functional component from QueryTag, with ability to remove it.
}


const QueryTag = styled.div`
    border-radius: 20px;
    border:solid;
`;