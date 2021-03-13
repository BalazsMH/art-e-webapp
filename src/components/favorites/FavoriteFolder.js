import React, { useState, useContext } from 'react';
import { FolderDiv } from '../Styles.js';
import FavoriteFolderModal from './FavoriteFolderModal';
import { UserInfoContext } from '../user/UserInfoContext';
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../util/ItemTypes.js';

const FavoriteFolder = (props) => {
    const { allFavFolderName } = useContext(UserInfoContext);
    const { folderName, folderColor } = props;
    const [show, setShow] = useState(false);
    
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: () => ({ name: folderName }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const isActive = canDrop && isOver;
    let opacity = isActive ? 0.7 : canDrop ? 0.4 : 1;
    
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
                ref={drop}
                role={folderName}
                style={{ opacity }}
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
