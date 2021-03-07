import React from 'react';
import { AboutComponentContainer } from '../Styles.js';

const AboutComponent = () => {
    return (
        <AboutComponentContainer>
            <h1>Art-E Web Application by Team Art-E</h1>
            <br />
            <h2>Team members:</h2>
            <p>Balázs Márton Horváth</p>
            <p>Dániel Méry</p>
            <p>László Miklós Vajay</p>
            <br />
            <h2>Description:</h2>
            <p>This page was created as a team project for Codecool Advanced module.
                The main functionality is to get familiar with artworks of the Rijksmuseum. This is
                possible by browsing in the gallery and by taking several types of quiz. Answering correctly
                will earn experience to the actually logged in user. According to the earned experience, the user
                can check the actual position in the global scoreboard.
            </p>
            <br />
            <h2>Licenses:</h2>
            <a href="https://www.rijksmuseum.nl/en/research/conduct-research/data/policy">Rijksmuseum API</a><br />
            <a href="https://github.com/ankeetmaini/react-infinite-scroll-component/blob/master/license">React infinite scroll component</a><br />
            <a href="https://fontawesome.com/license/free">Font Awesome icon set</a><br />
            <a href="https://github.com/grommet/grommet/blob/master/LICENSE">Grommet</a><br />
            <a href="https://github.com/contra/react-responsive/blob/master/LICENSE">React-responsive</a>
            
        </AboutComponentContainer>
    );
}

export default AboutComponent;