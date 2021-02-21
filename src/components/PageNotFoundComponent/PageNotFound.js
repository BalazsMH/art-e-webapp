import React from 'react';
import {DocumentMissing} from 'grommet-icons';
import {Text} from 'grommet';
import { NotFoundContainer } from '../Styles.js';

export default function PageNotFound() {
    return (
        <NotFoundContainer>
            <DocumentMissing size="large"/>
            <Text margin="medium" size="large">Oops...No such page!</Text>
        </NotFoundContainer>
    )
}
