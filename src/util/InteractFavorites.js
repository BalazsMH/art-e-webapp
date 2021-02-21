import axios from 'axios';

const interactFavorites = (isFavorite, userName, objectNumber) => {
    axios({
        method: isFavorite ? 'DELETE' : 'POST',
        url:`http://localhost:8080/api/favorites/${userName}/${objectNumber}`
    })
    .catch(e => {
        console.log(e);
    });
}

export default interactFavorites;