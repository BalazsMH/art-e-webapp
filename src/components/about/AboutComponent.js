import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AboutConmponentContainer } from '../Styles.js';

const AboutComponent = () => {
    const [aboutContent, setAboutContent] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/about'
        })
        .then(res => {
            setAboutContent(res.data);
            setIsLoading(false);
        })
        .catch(e => {
            setIsLoading(false);
            console.log(e);
        })
    }, []);

    if (isLoading) {
        return (<div>Loading..</div>);
    }
    
    return (
        <AboutConmponentContainer>
            <h1>{aboutContent.title} by {aboutContent.teamName}</h1>
            <br />
            <h2>Team members:</h2>
            {aboutContent.teamMembers.length !== 0 ? aboutContent.teamMembers.map((member, key) => <p key={key}>{member}</p>) : <p>No entry found</p>}            
            <br />
            <h2>Description:</h2>
            <p>{aboutContent.description}</p>
            <br />
            <h2>Licenses:</h2>
            {Object.keys(aboutContent.licenses).map((component, key) => (
                <p key={key}>{component}: <a href={aboutContent.licenses[component]}>{aboutContent.licenses[component]}</a></p>
            ))}
        </AboutConmponentContainer>
    );
}





export default AboutComponent;