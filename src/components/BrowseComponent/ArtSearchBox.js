import React, {useState, createRef, useContext} from 'react';
import styled from 'styled-components';
import {ArtBrowserContext} from './ArtBrowserContext';


export default function ArtSearchBox() {
    const searchedQuery = {};
    const [artData, isLoading, setQueryParam, query] = useContext(ArtBrowserContext);


    let inputTerm, inputInvolvedMaker, inputTechnique, inputDatingPeriod;
    const centuryCount = 21;
    const searchButton = React.createRef();

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

    const handleEnterPressed = (e) => {
        if (e.key === 'Enter') { startSearch() };
    }
    
    const startSearch = () => {
        setQueryParam({
                        term: inputTerm,
                        involvedMaker: inputInvolvedMaker,
                        technique: inputTechnique,
                        datingPeriod: inputDatingPeriod})
    }
    //TODO: Keep searched phrases

    return (
        <SearchBox onKeyDown={handleEnterPressed}>
            <input type="text" placeholder="focusSearch for term" onChange={handleTermInput}></input>
            <input type="text" placeholder="Search for artist" onChange={handleMakerInput}></input>
            <input type="text" placeholder="Search for technique" onChange={handleTechniqueInput}></input>
            <select onChange={handleDatingPeriodInput}>
                <option value="none" defaultValue disabled>Search for century</option>
                {[...Array(centuryCount+1)].map((element, i) => <option key={i} value={i}>{i}</option>)}
            </select>

            <button ref={searchButton} type="button" onClick={(e)=> {startSearch()}}>Search!</button>
        </SearchBox>
    )
}

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
`;
