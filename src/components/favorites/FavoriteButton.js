import React, {useState} from 'react';
import {Button} from 'grommet';
import {Favorite} from 'grommet-icons';
import interactFavorites from '../../util/InteractFavorites';

export default function FavoriteButton(props) {   
    let {userId, objectNumber} = props.props;
    const [isFavorite, setIsFavorite] = useState(props.props.isFavorite)
    const [color, setColor] = useState(isFavorite ? "red" : "none");
    
    const favoriteOnClick = (e) => {
        let icon = e.target.querySelector('path');
        interactFavorites(isFavorite, userId, objectNumber);
        setIsFavorite(!isFavorite);
        icon.style.fill = color;
        setColor(isFavorite ? "red" : "none");
    }
    
    return (
        <Button icon={<Favorite color="red" />}
                hoverIndicator
                onClick = {(e) => favoriteOnClick(e)}
                />
    )
}
