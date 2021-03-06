import React, { useState, useEffect } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Button} from 'grommet';
import {ShareOption} from 'grommet-icons';
import axios from 'axios';
import FavoriteButton from '../favorites/FavoriteButton';
import { DetailsLink, ArtPicture } from '../Styles.js';
import cookie from 'react-cookies';
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ItemTypes } from '../../util/ItemTypes.js';
import logo from '../../images/artednd.png';
import { MoveToFavoriteFolder } from '../../util/InteractFavoriteFolder';

export default function ArtCard(props) {
    const artDetails = props.data;
    const imageUrl = props.data.webImage.url;
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url:`http://localhost:8080/api/favorites/isFavorite/${artDetails.objectNumber}`,
            headers: {
                'Authorization': cookie.load("Authorization")
            }
        })
        .then(res => {
            setIsFavorite(res.data);
            setIsLoading(false);
        })
        .catch(e => {
            setIsLoading(false);
            console.log(e);
        });
    }, [artDetails.objectNumber]);

    const cardName = artDetails.longTitle;
    const objectName = artDetails.objectNumber;
    let folderName = props.folderName
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.CARD,
        item: { cardName, objectName, folderName },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped '${item.cardName}' into '${dropResult.name}' folder!`);
                MoveToFavoriteFolder(item.folderName, dropResult.name, item.objectName);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    const opacity = isDragging ? 0.2 : 1;

    if (isLoading) {
        return (<div>Loading..</div>);
    }

    const favoriteProps = {
        isFavorite: isFavorite,
        objectNumber: artDetails.objectNumber
    }

    return (
        <>
            <DragPreviewImage connect={preview} src={logo} />
            <Card height="large" width="large" background="light-1" 
                focusIndicator={true}
                hoverIndicator={true}
                ref={drag} 
                role="Card"
                style={{ opacity }}
                >
                <CardHeader pad="medium">{artDetails.longTitle}</CardHeader>
                    <CardBody pad="medium">
                        <DetailsLink to={`/details/${artDetails.objectNumber}`}>
                            <ArtPicture imageUrl={imageUrl}></ArtPicture>
                        </DetailsLink>
                    </CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">   
                    <FavoriteButton props={favoriteProps} />
                    <Button icon={<ShareOption color="plain" />} 
                            hoverIndicator
                            //TODO: define share onClick={}
                            />
                </CardFooter>
            </Card>
        </>
    )
}
