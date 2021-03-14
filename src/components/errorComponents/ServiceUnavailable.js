import React from 'react';
import {StatusCritical} from 'grommet-icons';
import {Text} from 'grommet';
import { ErrorMessageContainer } from '../Styles.js';

export default function PageNotFound() {
    return (
        <ErrorMessageContainer>
            <StatusCritical size="large"/>
            <Text margin="medium" size="large">Service temporarily unavailable. Please check back later!</Text>
        </ErrorMessageContainer>
    )
}
