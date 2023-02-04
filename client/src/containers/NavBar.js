import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from './images/Logo.png'
import './NavBar/Navbar.css'


const NavBarStyle = styled.ul`
width: 100%;
list-style: none;
padding: 1em;
margin: 0;
background-color: #3c7f61;
height: 5.5em;
font-weight: bold;
text-decoration: none;
color: #3c7f61;
`

const NavLink = styled(Link)`
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 1.3rem;
text-decoration: none;
color: white; 
&:hover {
color: #e7e759;
}
`

const NavBarLayout = styled.li`
background-color: #3c7f61;
&:hover {
color: #BECE3A;
}
left: 10%; 
width: 3em;
display: inline;
top: 2rem;
padding: 1.8em;
text-decoration: none;
text-align: center;
justify-content: space-between;
position: relative;
`

const NavBar = () => {

    return (
        <>
        <img className='Logo' src={Logo} alt='Logo'/> 
        <NavBarStyle>
            <NavBarLayout>
                <NavLink to="/">Games</NavLink>
            </NavBarLayout>
            <NavBarLayout>
                <NavLink to="/CountriesFacts">Countries Facts</NavLink>
            </NavBarLayout>
            <NavBarLayout>
                <NavLink to="/FlagQuiz">Flag Quiz</NavLink>
            </NavBarLayout>
            <NavBarLayout>
                <NavLink to="/CountriesQuiz">Countries Quiz</NavLink>
            </NavBarLayout>
            <NavBarLayout>
                <NavLink to="/PopulationQuiz">Population Quiz</NavLink>
            </NavBarLayout>
            <NavBarLayout>
                <NavLink to="/LocationQuiz">Location Quiz</NavLink>
            </NavBarLayout>
        </NavBarStyle>
        </>
    )
    
    }
    
    export default NavBar