import React, {useContext} from 'react';
import ArtSearchBox from './ArtSearchBox';
import QueryTagContainer from './QueryTagContainer';
import PictureBrowser from './PictureBrowser';
import {AccordionPanel} from 'grommet';
import {Search} from 'grommet-icons';
import { BrowserContainer, ArtBrowserSidebar, MobileSearchButton } from '../Styles.js';
import { MediaInfoContext } from '../mediaInfo/MediaInfoContext';


export default function ArtBrowser() {
    const {isSmallScreen} = useContext(MediaInfoContext);

    return (
        <BrowserContainer>
        {isSmallScreen ?
        <>
        <MobileSearchButton>
            <AccordionPanel label={<><Search/>Search</>}>
                <ArtSearchBox></ArtSearchBox>
                <QueryTagContainer></QueryTagContainer>
            </AccordionPanel>
        </MobileSearchButton> 
        <PictureBrowser />
        </>
        :
        <>
        <ArtBrowserSidebar>
            <ArtSearchBox></ArtSearchBox>
            <QueryTagContainer></QueryTagContainer>
        </ArtBrowserSidebar>
        <PictureBrowser />
        </>
        }

        </BrowserContainer>
    )
}
