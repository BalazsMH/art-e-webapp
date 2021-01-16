import React, {useState} from 'react';
import styled from 'styled-components';

export default function ArtSearchBox(props) {
    const [searchedQuery, setSearchedQuery] = useState("");

    let inputTerm, inputInvolvedMaker, inputTechnique, inputDatingPeriod;


    const handleTermInput = (e) => {
        inputTerm = (e.target.value);
    }

    const handleMakerInput = (e) => {
        inputInvolvedMaker = (e.target.value);
    }


    return (
        <SearchBox>
            <input type="text" placeholder="Search for term" onChange={handleTermInput}></input>
            <input type="text" placeholder="Search for artist" onChange={handleMakerInput}></input>
            <button type="button" onClick={(e)=> {props.addQueryParam(inputTerm)}}>Search!</button>

            
        </SearchBox>
    )
}

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;

`;
