import React from 'react';
import ArtSearchBox from './ArtSearchBox';
import QueryTagContainer from './QueryTagContainer';
import PictureBrowser from './PictureBrowser';
import { BrowserContainer, ArtBrowserSidebar } from '../Styles.js';


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
