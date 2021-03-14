import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserInfoContext } from '../user/UserInfoContext';
import cookie from 'react-cookies';
import { FolderSidebarDiv } from '../Styles.js';
import FavoriteFolder from './FavoriteFolder';
import AddFolderButton from './AddFolderButton';

const FavoriteSidebar = (props) => {
    const { isLoggedIn, allFavFolderName } = useContext(UserInfoContext);
    const [favFolders, setFavFolders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshTrigger, setRefreshTrigger] = useState(true);
    
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

    if (isLoading) {
        return <div>Please wait</div>
    }

    return (
        <FolderSidebarDiv>
            <FavoriteFolder folderColor="ffffff" folderName={allFavFolderName} setFolderName={props.setFolderName}></FavoriteFolder>
            {favFolders.map((f, key) => <FavoriteFolder folderColor={f.colorHex} folderName={f.name} key={key} setFolderName={props.setFolderName} setRefreshTrigger={setRefreshTrigger}></FavoriteFolder>)}
            <AddFolderButton setRefreshTrigger={setRefreshTrigger}/>
        </FolderSidebarDiv>
    )
}

export default FavoriteSidebar;
