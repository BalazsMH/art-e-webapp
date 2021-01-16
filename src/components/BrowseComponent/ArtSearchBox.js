import React, {useState, createRef} from 'react';
import styled from 'styled-components';

export default function ArtSearchBox(props) {
    const searchedQuery = {};

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
        if (e.key === 'Enter') {
            props.addQueryParam({term: inputTerm,
                involvedMaker: inputInvolvedMaker,
                technique: inputTechnique,
                datingPeriod: inputDatingPeriod})
        }
    }


    return (
        <SearchBox onKeyDown={handleEnterPressed}>
            <input type="text" placeholder="focusSearch for term" onChange={handleTermInput}></input>
            <input type="text" placeholder="Search for artist" onChange={handleMakerInput}></input>
            <input type="text" placeholder="Search for technique" onChange={handleTechniqueInput}></input>
            <select onChange={handleDatingPeriodInput}>
                <option value="none" defaultValue disabled>Search for century</option>
                {[...Array(centuryCount+1)].map((element, i) => <option key={i} value={i}>{i}</option>)}
            </select>

            <button ref={searchButton} type="button" onClick={(e)=> {props.addQueryParam({term: inputTerm,
                                                                        involvedMaker: inputInvolvedMaker,
                                                                        technique: inputTechnique,
                                                                        datingPeriod: inputDatingPeriod})}
            }>Search!</button>
        </SearchBox>
    )
}

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;

`;
