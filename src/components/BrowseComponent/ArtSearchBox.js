import React, {useState, createRef, useContext} from 'react';
import styled from 'styled-components';
import {ArtBrowserContext} from './ArtBrowserContext';


export default function ArtSearchBox() {
    const searchedQuery = {};
    const {setQueryParam} = useContext(ArtBrowserContext);


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
            <SearchTitle>Search</SearchTitle>
            <label htmlFor="term">Term:</label>
            <SearchInput id="term" type="text" placeholder="Search for term" onChange={handleTermInput}></SearchInput>
            <label htmlFor="artist">Artist:</label>
            <SearchInput id="artist" type="text" placeholder="Search for artist" onChange={handleMakerInput}></SearchInput>
            <label htmlFor="technique">Technique:</label>
            <SearchInput type="technique" placeholder="Search for technique" onChange={handleTechniqueInput}></SearchInput>
            <label htmlFor="century">Century:</label>
            <SearchSelect id="century" onChange={handleDatingPeriodInput} value={"none"}>
                <option value="none" defaultValue disabled>Search for century</option>
                {[...Array(centuryCount+1)].map((element, i) => <option key={i} value={i}>{i}</option>)}
            </SearchSelect>

            <SearchButton ref={searchButton} type="button" onClick={(e)=> {startSearch()}}>Search!</SearchButton>
        </SearchBox>
    )
}

const SearchTitle = styled.h2`
    padding-bottom:0.7rem;
    
`;

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const SearchInput = styled.input`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem;

`;

const SearchSelect = styled.select `
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem;
`;

const SearchButton = styled.button`
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.2rem;
`;
