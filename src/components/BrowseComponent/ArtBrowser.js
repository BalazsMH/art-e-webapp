import React from 'react';
import styled from 'styled-components';
import ArtSearchBox from './ArtSearchBox2';
import QueryTagContainer from './QueryTagContainer';
import PictureBrowser from './PictureBrowser';


export default function ArtBrowser() {

    return (
        <BrowserContainer>
            <ArtBrowserSidebar>
                <ArtSearchBox></ArtSearchBox>
                <QueryTagContainer></QueryTagContainer>
            </ArtBrowserSidebar>
            <PictureBrowser />
        </BrowserContainer>
    )
}

const BrowserContainer = styled.div`
    width:auto;
    max-width: 100%;
`;


const ArtBrowserSidebar = styled.div`
    float:left;
    padding: 0.5rem;
    margin-top: 1rem;
`;
