import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';


const drawerWidth = 280;

const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">

        <NavBar drawerWidth={ drawerWidth } />

        <SideBar drawerWidth={ drawerWidth } />

        <Box 
        component="main"
        sx={{ flexGrow: 1, p: 2 }}
        >
            <Toolbar />
            { children }

        </Box>
    </Box>
  )
}

export default JournalLayout
