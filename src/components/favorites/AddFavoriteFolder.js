import React, {useState, useContext} from 'react';
import axios from 'axios';
import { UserInfoContext } from '../user/UserInfoContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../IconSet';
import { Layer, Button } from 'grommet';

const AddFavoriteFolder = () => {
    const [show, setShow] = useState();
    const [folderName, setFolderName] = useState("");
    const [folderColor, setFolderColor] = useState("");
    const { userName, isLoggedIn } = useContext(UserInfoContext);
    
    const handleFolderName = (e) => {
        setFolderName(e.target.value);
    }
    
    const handleFolderColor = (e) => {
        setFolderColor(e.target.value.slice(1));
    }

    const handleCreate = () => {
        setShow(false);
        if (isLoggedIn) {
            axios({
                method: 'POST',
                url:`http://localhost:8080/api/favorites/addFolder/${userName}/${folderName}/${folderColor}`
            })
            .catch(e => {
                console.log(e);
            });
        }
    }

    return (
        <>
            <FontAwesomeIcon 
                    icon={['fas', 'plus']} // fas = font awesome solid 
                    size='lg' 
                    color='black'
                    onClick={() => setShow(true)}
                />
            {show && (
                <Layer
                    onEsc={() => setShow(false)}
                    onClickOutside={() => setShow(false)}
                    >
                    <input value={folderName} placeholder="New favorite folder name" onChange={handleFolderName}></input>
                    <label>Folder color:</label>
                    <input type="color" onChange={handleFolderColor}/>
                    <Button label="Create" onClick={handleCreate} />
                </Layer>
            )}
        </>
    );
}

export default AddFavoriteFolder;