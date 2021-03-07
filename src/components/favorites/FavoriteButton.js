import React, {useState, useContext} from 'react';
import interactFavorites from '../../util/InteractFavorites';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserInfoContext } from '../user/UserInfoContext';
import '../IconSet';

export default function FavoriteButton(props) {   
    let {objectNumber} = props.props;
    const [isFavorite, setIsFavorite] = useState(props.props.isFavorite)
    const {isLoggedIn} = useContext(UserInfoContext);

    const favoriteOnClick = () => {
        interactFavorites(isFavorite, objectNumber);
        setIsFavorite(!isFavorite);
    }
    
    return (
        <>
            {isLoggedIn ?
                <FontAwesomeIcon 
                    icon={[isFavorite ? 'fas' : 'far', 'heart']} // fas = font awesome solid, far = font awesome regular 
                    size='lg' 
                    color='red'
                    onClick = {() => favoriteOnClick()}
                />
            : <></>}
        </>
    )
}
