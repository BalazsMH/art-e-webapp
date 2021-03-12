import React, { useState } from 'react';
import { Layer, Button } from 'grommet';
import InteractFavoriteFolder from '../../util/InteractFavoriteFolder';

const FavoriteFolderModal = (props) => {    
    const defaultColor = "0A0A0A";
    const [folderName, setFolderName] = useState(props.folderName !== undefined ? props.folderName : "");
    const [folderColor, setFolderColor] = useState(props.folderColor !== undefined ? props.folderColor : defaultColor);
    
    const handleFolderName = (e) => {
        setFolderName(e.target.value);
    }
    
    const handleFolderColor = (e) => {
        setFolderColor(e.target.value.slice(1));
    }

    const handleFolder = () => {
        props.setShow(false);
        if (props.folderName !== undefined) {
            InteractFavoriteFolder(props.folderName, folderColor, folderName)
            .then(() => props.setRefreshTrigger((prev) => !prev));
        }
        else {
            InteractFavoriteFolder(folderName, folderColor)
            .then(() => props.setRefreshTrigger((prev) => !prev));
        }
    }

    return (
        <>
            <Layer onEsc={() => props.setShow(false)} onClickOutside={() => props.setShow(false)}>
                <input value={folderName} placeholder="New favorite folder name" onChange={handleFolderName}></input>
                <label>Folder color:</label>
                <input type="color" onChange={handleFolderColor} value={"#" + folderColor}/>
                <Button label={props.folderName === undefined ? "Create" : "Modify"} onClick={handleFolder} />
            </Layer>
        </>
    )
}

export default FavoriteFolderModal;
