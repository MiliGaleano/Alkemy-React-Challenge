import React, {useState, useEffect} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    width: 100%;
    background-color: #1c36af;
    display: flex;
    justify-content: flex-end;
`;
const Menu = styled.nav`

    & ul {
        display: flex;
        flex-direction: row;
        list-style: none;
    }
`;

const LiNav = styled.li`
        padding: 12px;
        font-size: 1rem;
        color: ${props => props.navcolor};
        cursor: pointer;

        &:hover {
            color: yellow;
        }
`;

const Header = () => {

    const [pathname, setPathname] = useState('/')
    const location = useLocation()

    //  check pathname to asign color to nav menu
    useEffect(() => {
        setPathname(location.pathname)
      }, [location])

    // log out, remove token from localStorage
    let history = useHistory()
    const handleLogOut = () => {
        localStorage.removeItem('token')
        history.push("/login")
    }

    return(
        <HeaderContainer>
            <Menu>
                <ul>
                    <Link to='/'><LiNav navcolor={pathname === '/' ? 'yellow' : 'orange'}>Team</LiNav></Link>
                    <Link to='/search'><LiNav navcolor={pathname === '/search' ? 'yellow' : 'orange'}>Search</LiNav></Link>
                    <LiNav onClick={handleLogOut} navcolor='orange'>Log out</LiNav>
                </ul>
            </Menu>
        </HeaderContainer>
    )
}

export default Header