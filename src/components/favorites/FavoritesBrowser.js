import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ArtCard from '../BrowseComponent/ArtCard';
import axios from 'axios';
import { GridContainer } from '../Styles.js';
import { UserInfoContext } from '../user/UserInfoContext';
import FavoriteFolders from '../favorites/FavoriteFolders';

const FavoritesBrowser = () => {
    const { userName: userNameParam } = useParams();
    const { userName, isLoggedIn, allFavFolderName } = useContext(UserInfoContext);
    const [isLoading, setIsLoading] = useState(true)
    const [artData, setArtData] = useState([]);
    const [folderName, setFolderName] = useState(allFavFolderName);

    useEffect(() => {
        if (isLoggedIn && (userNameParam === userName)) {
            let folderUrl = `http://localhost:8080/api/favorites/getByFolder/${userName}/${folderName}`
            if (folderName === allFavFolderName || folderName === undefined) {
                folderUrl = `http://localhost:8080/api/favorites/${userName}`
            }
            axios({
                method: 'GET',
                url:folderUrl
            }).then(res => {
                setArtData(res.data);
                setIsLoading(false);
            })
            .catch(e => {
                setIsLoading(false);
                console.log(e);
            });
        }
        else { setIsLoading(false); }
    }, [userName, userNameParam, isLoggedIn, folderName, allFavFolderName])

    if (isLoading) {
        return (<div>Favorites loading..</div>);
    }
    
    return (
        <div>
            <FavoriteFolders setFolderName={setFolderName}/>
            <GridContainer>   
            {
                artData.length !== 0 
                    ? artData.map((artPiece, index) => {
                        return <ArtCard data={artPiece} userName={userName} key={index}></ArtCard>
                    })
                    : !isLoggedIn 
                        ? <div>Please login to use this feature!</div>
                        : userName === userNameParam 
                            ? <div>No favorites found.</div>
                            : <div>You cannot see other user's favorites!</div> 
            }
            </GridContainer>
        </div>
    )
}

export default FavoritesBrowser;
