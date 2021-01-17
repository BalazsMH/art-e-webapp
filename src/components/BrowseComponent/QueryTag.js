import React from 'react';
import styled from 'styled-components';

export default function QueryTag(props) {

    const [key, value] = props.data;
    return (
        <Tag key={key}>
            {value}
        </Tag>
    )
}
//TODO:create functional component from QueryTag, with ability to remove it.


const Tag = styled.div`
    border-radius: 20px;
    border:solid;
`;