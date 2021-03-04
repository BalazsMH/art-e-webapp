import React, {createContext} from 'react';
import { useMediaQuery } from 'react-responsive';

export const MediaInfoContext = createContext();

export const MediaInfoProvider = (props) => {
    // const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' });
    // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
    // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    // const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

    const isSmallScreen = useMediaQuery({ query: '(max-width: 768px' });

    
    return (
        <MediaInfoContext.Provider value={{isSmallScreen}}>
            {props.children}
        </MediaInfoContext.Provider>
    );
}
