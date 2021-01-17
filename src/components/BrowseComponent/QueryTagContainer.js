import React from 'react';
import styled from 'styled-components';
import QueryTag from './QueryTag';


export default function QueryTagContainer(props) {
    return (
        <div>
            {Object.entries(props.query).map(([key, value]) => {
            if(value) return <QueryTag data={[key, value]}></QueryTag> 
        })}
        </div>
    )
}


