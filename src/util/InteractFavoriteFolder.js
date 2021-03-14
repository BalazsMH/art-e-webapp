import axios from 'axios';
import cookie from 'react-cookies';

const InteractFavoriteFolder = async (folderName, folderColor, nextFolderName) => {
    let folderUrl = `http://localhost:8080/api/favoriteFolder/addFolder/${folderName}/${folderColor}`;
    let method = 'POST';
    if (nextFolderName !== undefined) {
        folderUrl = `http://localhost:8080/api/favoriteFolder/changeFolder/${folderName}/${nextFolderName}/${folderColor}`;
        method = 'PUT';
    }
    await axios({
        method: method,
        url: folderUrl,
        headers: {
            'Authorization': cookie.load("Authorization")
        }
    })
    .catch(e => {
        console.log(e);
    });
}

const MoveToFavoriteFolder = async (origFolderName, newFolderName, objectName) => {
    const allFavFolderName = "All";
    let folderUrl = `http://localhost:8080/api/favorites/removeFromFolder/${origFolderName}/${objectName}`;
    let method = 'DELETE';
    if (newFolderName !== allFavFolderName) {
        folderUrl = `http://localhost:8080/api/favorites/addFavorite/${objectName}/${newFolderName}`;
        method = 'POST';
    }
    await axios({
        method: method,
        url: folderUrl,
        headers: {
            'Authorization': cookie.load("Authorization")
        }
    })
    .catch(e => {
        console.log(e);
    });
}

export {InteractFavoriteFolder, MoveToFavoriteFolder};
