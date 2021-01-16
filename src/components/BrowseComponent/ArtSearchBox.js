import React, {useState} from 'react';
import styled from 'styled-components';

export default function ArtSearchBox(props) {
    const searchedQuery = {};

    let inputTerm, inputInvolvedMaker, inputTechnique, inputDatingPeriod;
    const centuryCount = 21;

    const handleTermInput = (e) => {
        inputTerm = (e.target.value);
    }

    const handleMakerInput = (e) => {
        inputInvolvedMaker = (e.target.value);
    }

    const handleTechniqueInput = (e) => {
        inputTechnique = (e.target.value);
    }
    const handleDatingPeriodInput = (e) => {
        inputDatingPeriod = (e.target.value);
    }


    return (
        <SearchBox>
            <input type="text" placeholder="Search for term" onChange={handleTermInput}></input>
            <input type="text" placeholder="Search for artist" onChange={handleMakerInput}></input>
            <input type="text" placeholder="Search for technique" onChange={handleTechniqueInput}></input>
            <select onChange={handleDatingPeriodInput}>
                <option value="none" selected disabled>Search for century</option>
                {[...Array(centuryCount+1)].map((element, i) => <option value={i}>{i}</option>)}
            </select>

            <button type="button" onClick={(e)=> {props.addQueryParam(inputTerm)}}>Search!</button>
        </SearchBox>
    )
}

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;

`;
