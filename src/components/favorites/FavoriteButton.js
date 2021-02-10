import React, {useState} from 'react';
import interactFavorites from '../../util/InteractFavorites';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../IconSet';

export default function FavoriteButton(props) {   
    let {userId, objectNumber} = props.props;
    const [isFavorite, setIsFavorite] = useState(props.props.isFavorite)
    
    const favoriteOnClick = () => {
        interactFavorites(isFavorite, userId, objectNumber);
        setIsFavorite(!isFavorite);
    }
    
    return (
        <FontAwesomeIcon 
            icon={[isFavorite ? 'fas' : 'far', 'heart']} // fas = font awesome solid, far = font awesome regular 
            size='lg' 
            color='red'
            onClick = {() => favoriteOnClick()}
        />
    )
}
