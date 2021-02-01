import React from 'react';
import {DocumentMissing} from 'grommet-icons';
import {Text} from 'grommet';
import styled from 'styled-components';

export default function PageNotFound() {
    return (
        <Container>
            <DocumentMissing size="large"/>
            <Text margin="medium" size="large">Oops...No such page!</Text>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items:center;
    flex: 1 1 auto;
    overflow-y: auto;
`;