import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserInfoContext } from '../user/UserInfoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../IconSet';
import cookie from 'react-cookies';
import { Layer, Button } from 'grommet';
import InteractFavoriteFolder from '../../util/InteractFavoriteFolder';
import { FolderDiv, FolderSidebarDiv } from '../Styles.js';

const FavoriteFolders = (props) => {
    const origColor = "#0A0A0A";
    const { isLoggedIn, allFavFolderName } = useContext(UserInfoContext);
    const [favFolders, setFavFolders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [folderName, setFolderName] = useState("");
    const [folderColor, setFolderColor] = useState(origColor.slice(1));
    const [refreshTrigger, setRefreshTrigger] = useState(true);
    const [oldFolderName, setOldFolderName] = useState("");
    
    useEffect(() => {
        if (isLoggedIn) {
            axios({
                method: 'GET',
                url:`http://localhost:8080/api/favoriteFolder/getFolders`,
                headers: {
                    'Authorization': cookie.load("Authorization")
                }
            }).then(res => {
                setFavFolders(res.data);
                setIsLoading(false);
            })
            .catch(e => {
                setIsLoading(false);
                console.log(e);
            })
        }
    }, [isLoggedIn, refreshTrigger]);

    const showFavorites = (e) => {
        props.setFolderName(e.target.textContent)
    }

    const handleFolderName = (e) => {
        setFolderName(e.target.value);
    }
    
    const handleFolderColor = (e) => {
        setFolderColor(e.target.value.slice(1));
    }

    const handleFolder = () => {
        setShow(false);
        if (isLoggedIn) {
            if (oldFolderName !== "") {
                InteractFavoriteFolder(oldFolderName, folderColor, folderName)
                .then(() => setRefreshTrigger((prev) => !prev));
            }
            else {
                InteractFavoriteFolder(folderName, folderColor)
                .then(() => setRefreshTrigger((prev) => !prev));
            }
            setFolderName("");
            setFolderColor(origColor.slice(1));
        }
    }

    const handleFolderDoubleClick = (folderName, folderColor) => {
        setFolderName(folderName);
        setFolderColor(folderColor);
        setOldFolderName(folderName);
        setShow(true);
    }

    const handleAddClick = () => {
        setOldFolderName("");
        setFolderName("");
        setFolderColor(origColor.slice(1))
        setShow(true);
    }

    if (isLoading) {
        return <div>Please wait</div>
    }

    return (
        <FolderSidebarDiv>
            <FolderDiv colorHex="#ffffff" onClick={showFavorites}>{allFavFolderName}</FolderDiv>
            {favFolders.map((f, key) => <FolderDiv colorHex={f.colorHex} key={key} onClick={showFavorites} onDoubleClick={() => handleFolderDoubleClick(f.name, f.colorHex)}>{f.name}</FolderDiv>)}
            <FontAwesomeIcon 
                    icon={['fas', 'plus']} // fas = font awesome solid 
                    size='lg' 
                    color='black'
                    onClick={() => handleAddClick()}
                />
            {show && (
                <Layer
                    onEsc={() => setShow(false)}
                    onClickOutside={() => setShow(false)}
                    >
                    <input value={folderName} placeholder={oldFolderName === "" ? "New favorite folder name" : ""} onChange={handleFolderName}></input>
                    <label>Folder color:</label>
                    <input type="color" onChange={handleFolderColor} value={"#" + folderColor}/>
                    <Button label="Create" onClick={handleFolder} />
                </Layer>
            )}
        </FolderSidebarDiv>
    )
}

export default FavoriteFolders;
