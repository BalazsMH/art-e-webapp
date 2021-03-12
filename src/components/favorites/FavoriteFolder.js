import React, { useState, useContext } from 'react';
import { FolderDiv } from '../Styles.js';
import FavoriteFolderModal from './FavoriteFolderModal';
import { UserInfoContext } from '../user/UserInfoContext';

const FavoriteFolder = (props) => {
    const { allFavFolderName } = useContext(UserInfoContext);
    const { folderName, folderColor } = props;
    const [show, setShow] = useState(false);
    
    const showFavorites = (e) => {
        props.setFolderName(e.target.textContent)
    }

    const showFolderModal = (folderName) => {
        if (folderName !== allFavFolderName) {
            setShow(true);
        }
    }

    return (
        <>
            <FolderDiv 
                colorHex={folderColor} 
                onClick={showFavorites} 
                onDoubleClick={() => showFolderModal(folderName)}
            >
                {folderName}
            </FolderDiv>
            {show && (
                <FavoriteFolderModal 
                    folderName={folderName} 
                    folderColor={folderColor} 
                    show={show} 
                    setShow={setShow} 
                    setRefreshTrigger={props.setRefreshTrigger}
                />)}
        </>
    )
}

export default FavoriteFolder;
