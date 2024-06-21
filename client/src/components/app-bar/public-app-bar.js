import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import './hover-underline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@mui/styles';
import { faAward, faUsers, faComment } from '@fortawesome/free-solid-svg-icons'

import Stack from '@mui/material/Stack';

document.body.className = "AnErrorHasOccured";

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, rgba(0, 195, 255, 0.8), rgba(182, 62, 238, 0.8))',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(25, 0, 255, 0.2)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      fontSize: '15px'
    },
  });



const PublicAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate();

    const classes = useStyles();
        
return (
            <AppBar position="static" color='grey'>
                <Container maxWidth="x1">
                    <Toolbar disableGutters>

                            {/* FANCIER button */}
                            <Button 
                                onClick={() => {navigate("/public");}}
                            >
                                <Avatar
                                    sx={{ width: 70, height: 65 }}
                                    variant="square"
                                    src="/img/fancierlogo1.png"
                                />
                                <Avatar
                                    sx={{ width: 130, height: 65 }}
                                    variant=""
                                    src="/img/fancierlogo2.png"
                                />
                            </Button> 

                        {/* Box for menu (when minimized window) */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            
                            {/* menuicon */}
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* menu */}
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/public");}}>
                                        <Typography textAlign="center" color="black">Activities <FontAwesomeIcon icon={faAward}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/publiccontact");}}>
                                        <Typography textAlign="center" color="black">Contact <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/aboutpublic");}}>
                                        <Typography textAlign="center" color="black">About <FontAwesomeIcon icon={faComment}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>

                            </Menu>
                        </Box>

                        {/* FANCIER button (minimized window) */}
                        <Button onClick={() => {navigate("/public");}}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                                color="black"
                            >
                                Fancier
                            </Typography>
                        </Button>

                        {/* box for app bar buttons */}
                            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }} className="hover-underline">
                                <nav>
                                    <a href='/public'>Activities <FontAwesomeIcon icon={faAward}></FontAwesomeIcon></a>
                                    <a href='/publiccontact'>Contact <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></a>
                                    <a href='/aboutpublic'>About <FontAwesomeIcon icon={faComment}></FontAwesomeIcon></a>
                                </nav>
                            </Box>

                        {/* ปุ่มสมัครสมาชิก */}                        
                        <Box sx={{ flexGrow: 0 }} position="right">
                            <Stack spacing={2} direction="row">
                                <Box onClick={() => {navigate("/login");}}>
                                <Button className={classes.root}>LOGIN</Button>
                                <FontAwesomeIcon icon="fa-solid fa-bone" />
                                </Box>
                            </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    );
};
export default PublicAppBar;