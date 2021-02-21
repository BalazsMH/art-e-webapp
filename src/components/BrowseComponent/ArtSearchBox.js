import React, {useState, useContext} from 'react';
import {ArtBrowserContext} from './ArtBrowserContext';
import { SearchBox, SearchTitle, SearchInput, SearchSelect, SearchButton } from '../Styles.js';

export default function ArtSearchBox() {
    const {setQueryParam} = useContext(ArtBrowserContext);
    const [term, setTerm] = useState("");
    const [involvedMaker, setInvolvedMaker] = useState("")
    const [technique, setTechnique] = useState("");
    const [datingPeriod, setDatingPeriod] = useState("");

    const centuryCount = 21;

    const handleTermInput = (e) => {
        setTerm(e.target.value);
    }

    const handleMakerInput = (e) => {
        setInvolvedMaker(e.target.value);
    }

    const handleTechniqueInput = (e) => {
        setTechnique(e.target.value);
    }
    const handleDatingPeriodInput = (e) => {
        setDatingPeriod(e.target.value);
    }

    const handleEnterPressed = (e) => {
        if (e.key === 'Enter') { startSearch() };
    }
    
    const startSearch = () => {
        setQueryParam({
                        term: term === "" ? null : term,
                        involvedMaker: involvedMaker === "" ? null : involvedMaker,
                        technique: technique === "" ? null : technique,
                        datingPeriod: datingPeriod === "" ? null : datingPeriod})
    }
    //TODO: Keep searched phrases

    return (
        <SearchBox onKeyDown={handleEnterPressed}>
            <SearchTitle>Search</SearchTitle>
            <label htmlFor="term">Term:</label>
            <SearchInput id="term" value={term} type="text" placeholder="Search for term" onChange={handleTermInput}></SearchInput>
            <label htmlFor="artist">Artist:</label>
            <SearchInput id="artist" value={involvedMaker} type="text" placeholder="Search for artist" onChange={handleMakerInput}></SearchInput>
            <label htmlFor="technique">Technique:</label>
            <SearchInput value={technique} type="technique" placeholder="Search for technique" onChange={handleTechniqueInput}></SearchInput>
            <label htmlFor="century">Century:</label>
            <SearchSelect id="century" onChange={handleDatingPeriodInput} value={"none"}>
                <option value="none" defaultValue disabled>Search for century</option>
                {[...Array(centuryCount + 1)].map((element, i) => <option key={i} value={i}>{i}</option>)}
            </SearchSelect>

            <SearchButton type="button" onClick={() => startSearch()}>Search!</SearchButton>
        </SearchBox>
    )
}


