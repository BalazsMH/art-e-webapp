import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserInfoContext } from '../user/UserInfoContext';
import styled from 'styled-components';
import '../IconSet';
import AddFavoriteFolder from "./AddFavoriteFolder";

const FavoriteFolders = () => {
    const { userName, isLoggedIn } = useContext(UserInfoContext);
    const [favFolders, setFavFolders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (isLoggedIn) {
            axios({
                method: 'GET',
                url:`http://localhost:8080/api/favorites/getFolders/${userName}`,
            }).then(res => {
                setFavFolders(res.data);
                setIsLoading(false);
            })
            .catch(e => {
                setIsLoading(false);
                console.log(e);
            })
        }
    }, [userName, isLoggedIn]);

    if (isLoading) {
        return <div>Please wait</div>
    }

    return (
        <FolderSidebarDiv>
            <FolderDiv colorHex="#ffffff">All</FolderDiv>
            {favFolders.map((f, key) => <FolderDiv colorHex={f.colorHex} key={key}>{f.name}</FolderDiv>)}
            <AddFavoriteFolder/>
        </FolderSidebarDiv>
    )
}

export default FavoriteFolders;

const FolderDiv = styled.div`
    background-color: ${props=> "#" + props.colorHex};
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const FolderSidebarDiv = styled.div`
    float: left;
`;