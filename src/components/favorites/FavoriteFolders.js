import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserInfoContext } from '../user/UserInfoContext';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../IconSet';

const FavoriteFolders = () => {
    const { userName, isLoggedIn } = useContext(UserInfoContext);
    const [favFolders, setFavFolders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
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
    }, [userName])

    const addFolderOnClick = () => {
        console.log("clicked");
    }

    if (isLoading) {
        return <div>Please wait</div>
    }
    return (
        <FolderSidebarDiv>
            <FolderDiv colorHex="#ffffff">All</FolderDiv>
            {favFolders.map(f => <FolderDiv colorHex={f.colorHex}>{f.name}, {f.colorHex}</FolderDiv>)}
            <FontAwesomeIcon 
                    icon={['fas', 'plus']} // fas = font awesome solid, far = font awesome regular 
                    size='lg' 
                    color='black'
                    onClick = {() => addFolderOnClick()}
                />
        </FolderSidebarDiv>
    )
}

export default FavoriteFolders;

const FolderDiv = styled.div`
    background-color: ${props=> props.colorHex};
`;

const FolderSidebarDiv = styled.div`
    float: left;
`;