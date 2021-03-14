import React, { useState, useContext } from 'react';
import { FolderDiv } from '../Styles.js';
import FavoriteFolderModal from './FavoriteFolderModal';
import { UserInfoContext } from '../user/UserInfoContext';
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../util/ItemTypes.js';
import { RemoveButton } from '../Styles.js';
import {FormClose} from 'grommet-icons';
import axios from 'axios';
import cookie from 'react-cookies';

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
    let opacity = isActive ? 0.8 : canDrop ? 0.4 : 1;
    
    const showFavorites = (e, folderName) => {
        props.setFolderName(folderName)
    }

    const showFolderModal = (folderName) => {
        if (folderName !== allFavFolderName) {
            setShow(true);
        }
    }

    const removeFolder = (e, folderName) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:8080/api/favoriteFolder/deleteFolder/${folderName}`,
            headers: {
                'Authorization': cookie.load("Authorization")
            }
        })
        .then(() => {
            props.setRefreshTrigger(prev => !prev);
        })
        .catch(e => {
            console.log(e);
        });
    }

    return (
        <>
            <FolderDiv 
                colorHex={folderColor} 
                onClick={(e) => {showFavorites(e, folderName)}} 
                onDoubleClick={() => showFolderModal(folderName)}
                ref={drop}
                role={folderName}
                style={{ opacity }}
            >
                {folderName}
                {folderName !== allFavFolderName ? <RemoveButton onClick={(e)=> {removeFolder(e, folderName)}}><FormClose/></RemoveButton> : <></>}
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
