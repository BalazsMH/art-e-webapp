import React, { useState, useEffect, useContext } from 'react';
import ArtCard from '../BrowseComponent/ArtCard';
import axios from 'axios';
import { GridContainer } from '../Styles.js';
import { UserInfoContext } from '../user/UserInfoContext';
import FavoriteFolders from '../favorites/FavoriteFolders';
import cookie from 'react-cookies';

const FavoritesBrowser = () => {
    const {isLoggedIn, allFavFolderName } = useContext(UserInfoContext);
    const [isLoading, setIsLoading] = useState(true)
    const [artData, setArtData] = useState([]);
    const [folderName, setFolderName] = useState(allFavFolderName);

    useEffect(() => {
        if (isLoggedIn) {
            let folderUrl = `http://localhost:8080/api/favorites/getByFolder/${folderName}`
            if (folderName === allFavFolderName || folderName === undefined) {
                folderUrl = `http://localhost:8080/api/favorites/`
            }
            axios({
                method: 'GET',
                url:folderUrl,
                headers: {
                    'Authorization': cookie.load("Authorization")
                }
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
    }, [isLoggedIn, folderName, allFavFolderName])

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
                        return <ArtCard data={artPiece} key={index}></ArtCard>
                    })
                    : !isLoggedIn 
                        ? <div>Please login to use this feature!</div>
                        : <div>No favorites found.</div>
            }
            </GridContainer>
        </div>
    )
}

export default FavoritesBrowser;
