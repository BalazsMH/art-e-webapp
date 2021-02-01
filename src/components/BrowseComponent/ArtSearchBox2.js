import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import {ArtBrowserContext} from './ArtBrowserContext';
import {Box, Button, FormField, TextInput, Form, Select} from 'grommet';


export default function ArtSearchBox() {
    const {setQueryParam} = useContext(ArtBrowserContext);
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const centuryCount = 21;

    useEffect(() => {
        setIsLoading(false);
    }, [])

    const handleEnterPressed = (e) => {
        if (e.key === 'Enter') { startSearch() };
    }
    
    const startSearch = () => {
        setQueryParam({
                        term: formData.term,
                        involvedMaker: formData.involvedMaker,
                        technique: formData.technique,
                        datingPeriod: formData.datingPeriod})
    }
    //TODO: Keep searched phrases

    if (isLoading) {
        return <div>Loading..</div>
    }

    return (
        <Form
            value={formData}
            onChange={prevData => setFormData(prevData)}
            onReset={()=>setFormData({})}
            onSubmit={startSearch}
            >
            <FormField name="term" label="Term:" htmlFor="term-input">
                <TextInput name="term" placeholder="Search for term" id="term-input"></TextInput>
            </FormField>
            <FormField name="artist" label="Artist:" htmlFor="artist-input">
                <TextInput name="artist" placeholder="Search for artist" id="artist-input"></TextInput>
            </FormField>
            <FormField name="technique" label="Technique:" htmlFor="technique-input">
                <TextInput name="technique" placeholder="Search for technique" id="technique-input"></TextInput>
            </FormField>
            {/* <FormField name="datingPeriod" label="Technique:">
                <Select
                 options={[...Array(centuryCount + 1)].map((element, i) => <option key={i} value={i}>{i}</option>)}
                 name="datingPeriod" placeholder="--Add dating period"></Select>
            </FormField> */}
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Search"></Button>
                <Button type="reset" label="Reset search"></Button>
            </Box>
        </Form>

        // <SearchBox onKeyDown={handleEnterPressed}>
        //     <SearchTitle>Search</SearchTitle>
        //     <label htmlFor="term">Term:</label>
        //     <SearchInput id="term" value={term} type="text" placeholder="Search for term" onChange={handleTermInput}></SearchInput>
        //     <label htmlFor="artist">Artist:</label>
        //     <SearchInput id="artist" value={involvedMaker} type="text" placeholder="Search for artist" onChange={handleMakerInput}></SearchInput>
        //     <label htmlFor="technique">Technique:</label>
        //     <SearchInput value={technique} type="technique" placeholder="Search for technique" onChange={handleTechniqueInput}></SearchInput>
        //     <label htmlFor="century">Century:</label>
        //     <SearchSelect id="century" onChange={handleDatingPeriodInput} value={"none"}>
        //         <option value="none" defaultValue disabled>Search for century</option>
        //         {[...Array(centuryCount + 1)].map((element, i) => <option key={i} value={i}>{i}</option>)}
        //     </SearchSelect>

        //     <SearchButton type="button" onClick={() => startSearch()}>Search!</SearchButton>
        // </SearchBox>
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
