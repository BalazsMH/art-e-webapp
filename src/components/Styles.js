import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Box, DropButton, Text, Accordion} from 'grommet';


/* ArtBrowser styles */
export const BrowserContainer = styled.div`
    width:auto;
    max-width: 100%;
`;
export const ArtBrowserSidebar = styled.div`
    float:left;
    padding: 0.5rem;
    margin-top: 1rem;
`;
export const MobileSearchButton = styled(Accordion)`
    padding: 0.7rem 1rem 0.7rem 1rem;
`;


/* ArtCard styles */
export const DetailsLink = styled(Link)`
    width:100%;
    height:100%;
`;
export const ArtPicture = styled.div`
    background-image: url(${props=> props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
`;


/* ArtDetails styles */
export const InfoBox = styled(Box)`
    max-width: 40vw;
`;
export const AboutContainer = styled(Box)`
    margin-top: 1rem;
`;
export const DetailsContainer = styled.div`
    display:flex;
    flex-direction: row;
    margin: 1rem;
`;
export const AboutText = styled(Text)`
    hyphens: auto;
    text-align: justify;
`;


/*  ArtSearchBox styles */
export const SearchTitle = styled.h2`
    padding-bottom:0.7rem;
`;
export const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
`;
export const SearchInput = styled.input`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem;
`;
export const SearchSelect = styled.select `
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem;
`;
export const SearchButton = styled.button`
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.2rem;
`;


/*  PictureBrowser styles */
export const GridContainer = styled.div`
    display: grid;
    padding: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 1rem;
`;


/*  QueryTag styles */
export const Tag = styled.div`
    border-radius: 20px;
    border:solid;
`;
export const RemoveButton = styled.span`
    cursor: pointer;
`;


/*  QueryTagContainer styles */



/*  Navbar styles */
export const NavContainer = styled.header`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 100;
    background-color: #231F20;
    color: #ffffff;
    padding:0.2rem 0.7rem 0.2rem 0.7rem;
`;
export const MobileNav = styled.header`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    position: -webkit-sticky;
    height: auto;
    top: 0;
    z-index: 100;
    background-color: #231F20;
    color: #ffffff;
    padding:0.2rem 0.7rem 0.2rem 0.7rem;
`;
export const NavRoutes = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    margin-left: 1.5rem;

`;
export const UserFunctionsContainer = styled.div`
    display: flex;
    margin-left: auto;
`;
export const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem;
    margin: 0 0.5rem 0 0.5rem;
    color:inherit;
    &:hover{
        text-decoration: underline;
    }
`;
export const SiteLogo = styled.img`
    max-width: 6rem;
`;
export const UserDropButton = styled(DropButton)`
    padding: 0;
    border: none;
`;
export const MenuDropButton = styled(DropButton)`
    padding: 0;
    border: none;
`;

export const DropButtonContent = styled(Box)`
    z-index:500;
`;


/*  PageNotFoundComponent styles */
export const NotFoundContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items:center;
    flex: 1 1 auto;
    overflow-y: auto;
`;


/*  AnswerButton styles */
export const AnsButton = styled.button`
    color: white;
    padding: 10px;
    border-radius: 0.5rem;
    width: 90%;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-left: 5%;
    margin-right: auto;
`;


/*  Question styles */
export const QuestionContainer = styled.div`
    position: relative !important;
    background: #DAD299;
    background: -webkit-linear-gradient(to right, #B0DAB9, #DAD299);
    background: linear-gradient(to right, #B0DAB9, #DAD299);
    color: white;
    padding: 15px;
    border-radius: 0.5rem;
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    `;
export const ImgDetail = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: initial;
`;
export const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;
export const ImgContainer = styled.div`
    max-width: 50%;
    overflow: hidden;
`;
export const QuestionH2 = styled.h2`
    text-align: center;
    width: 100%;
`;
export const AnswerContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 0.5rem;
`;
export const NextButton = styled.button`
    background: #DAD299;
    color: white;
    padding: 10px;
    border-radius: 0.5rem;
    width: 20%;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-left: 40%;
    margin-right: auto;
`;


/*  Quiz styles */
export const QuizContainer = styled.div`
    position: relative !important;
    display: flex;
    margin-top: 0.5rem;
    display: block;
    margin-left: 30% !important;
    margin-right: auto;
    width: 40%;
`;


/*  QuizPage styles */
export const QuizH1 = styled.h2`
    text-align: center;
    font-weight: 600;
    font-size: 3rem;
    width: 100%;
`;
export const QuizzesContainer = styled.div`
    display: flex;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between !important;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 0.5rem;
    @media (max-width: 768px) {
        flex-direction: column;
}
`;
export const QuizH2 = styled.h2`
    text-align: center;
    font-weight: 600;
    width: 100%;
`;
export const QuizSelector = styled.div`
    position: relative;
    padding: 3%;
    padding-bottom: 6rem;
    border: 2px;
    border-style: solid;
    border-color: #000000;
    border-radius: 20px;
    margin-left: 3%;
    margin-right: 3%;
    width: 70%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    &:hover {
        -moz-box-shadow: 0 0 20px #999;
        -webkit-box-shadow: 0 0 20px #999;
        box-shadow: 0 0 20px #999;
        }
`;
export const QuizDetails = styled.div`
    text-align: center;
    font-weight: 400;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
`;
export const NextButtonPage = styled.button`
    display: block;
    position: absolute;
    bottom: 1rem;
    background: #ffffff;
    color: black;
    border: 1px;
    border-radius: 20px;
    border-style: solid;
    border-color: #000000;
    width: 50%;
    font-weight: 600;
    margin-bottom: 0.5rem;
    left: 25%;
    margin-right: auto;
    margin-top: 2rem;
    padding: 0.25rem;
    &:hover {
        background: #000000;
        color: white;
        }
`;
export const BackButton = styled.button`
    position: relative;
    background: #ffffff;
    color: black;
    border: 1px;
    border-radius: 20px;
    border-style: solid;
    border-color: #000000;
    width: 10%;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-left: 45%;
    margin-right: auto;
    margin-top: 2rem;
    &:hover {
        background: #000000;
        color: white;
        }
`;

export const NoMoreXp = styled.p`
    display: block;
    position: absolute;
    bottom: 1rem;
    background: #ffffff;
    color: black;
    border: 1px;
    border-radius: 20px;
    border-style: solid;
    border-color: #000000;
    width: 50%;
    font-weight: 600;
    margin-bottom: 0.5rem;
    left: 25%;
    margin-right: auto;
    margin-top: 2rem;
    padding: 0.25rem;
    text-align: center;
`;



/*  UserLogin styles */
export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem;
`;
export const LoginInput = styled.input`
    padding: 0.5rem;
`;
export const LoginButton = styled.button`
    font-size: 1rem;
    padding: 0.5rem;
    margin: 1rem;
`;
export const LoginCard = styled.div`
    display: flex;
    /* height: 100%; */
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 5rem;
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.20);
`;
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 2 rem;
    width:max-content;
`;


/*  UserRegistration styles */
export const RegistrationContainer = styled.div`
    display: flex;
    padding: 3rem;
    line-height: 3rem;
`;

/*  UserRegistration styles */
export const UserInformationContainer = styled.div`
    width:auto;
    max-width: 100%;
    display:flex;
    flex-direction:row;
`;
/*  UserSidebar styles */
export const SidebarContainer = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
    padding: 0.5rem;
    margin-top: 1rem;
`;


/* ArtDetails styles */
export const AboutComponentContainer = styled.div`
    margin: 2rem;
`;