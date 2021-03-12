import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../IconSet';
import FavoriteFolderModal from './FavoriteFolderModal';

const AddFolderButton = (props) => {
    const [show, setShow] = useState(false);
    
    const handleAddClick = () => {
        setShow(true);
    }

    return (
        <>
            <FontAwesomeIcon 
                icon={['fas', 'plus']} // fas = font awesome solid 
                size='lg' 
                color='black'
                onClick={() => handleAddClick()}
            />
            {show && (
                <FavoriteFolderModal 
                    show={show} 
                    setShow={setShow} 
                    setRefreshTrigger={props.setRefreshTrigger}
                />)}
        </>
    )
}

export default AddFolderButton;
