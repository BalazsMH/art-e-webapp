import React, {useState} from 'react';

export default function ArtSearchBox(props) {
    // const [inputValue, setInputValue] = useState("");

    let inputValue;

    const handleInput = (e) => {
        inputValue = (e.target.value);
    }

    // const addQueryParam = props.addQueryParam;

    return (
        <div>
            <form>
                <input type="text" onChange={handleInput}></input>
                {/* <button type="button" onClick={props.addQueryParam(inputValue)}>Search!</button> */}
                <button type="button" onClick={(e)=> {console.log(inputValue);
                                                     props.addQueryParam(inputValue)}}>Search!</button>

            </form>
            
        </div>
    )
}
