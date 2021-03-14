import React from 'react';
import {DocumentMissing} from 'grommet-icons';
import {Text} from 'grommet';
import { ErrorMessageContainer } from '../Styles.js';

export default function PageNotFound() {
    return (
        <ErrorMessageContainer>
            <DocumentMissing size="large"/>
            <Text margin="medium" size="large">Oops...No such page!</Text>
        </ErrorMessageContainer>
    )
}
