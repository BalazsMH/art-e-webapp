import axios from 'axios';
import cookie from 'react-cookies';

const interactFavorites = (isFavorite, objectNumber) => {
    axios({
        method: isFavorite ? 'DELETE' : 'POST',
        url:`http://localhost:8080/api/favorites/${objectNumber}`,
        headers: {
            'Authorization': cookie.load("Authorization")
        }
    })
    .catch(e => {
        console.log(e);
    });
}

export default interactFavorites;