import axios from 'axios';

const interactFavorites = (isFavorite, userId, objectNumber) => {
    axios({
        method: isFavorite ? 'DELETE' : 'POST',
        url:`http://localhost:8080/api/favorites/${userId}/${objectNumber}`
    })
    .catch(e => {
        console.log(e);
    });
}

export default interactFavorites;