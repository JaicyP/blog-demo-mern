import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom'

const Header = styled(AppBar)`
     background: #111111
`;


const Tab = styled(NavLink)`
   font-size: 20px;
   margin-right: 50px;
   color: inherit;
   text-decoration: none

`

const NavBar = () => {
    return(
       <Header  position= "static">
          <Toolbar>
            <Tab to='/all'>All Blogs</Tab>
            <Tab to='/add'>Add Blog</Tab>
          </Toolbar>
       </Header>
    )
}
export default NavBar;