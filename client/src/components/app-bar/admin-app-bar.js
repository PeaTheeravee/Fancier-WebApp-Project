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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@mui/styles';
import { faPencil, faUserGroup, faBook, faComment, faCircleUser} from '@fortawesome/free-solid-svg-icons'

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
    },
  });
  
export default function AdminAppBar(props) {

    const guessuser = JSON.parse(sessionStorage.getItem('guessuser'));
    const gguser = JSON.parse(sessionStorage.getItem('gguser'));

    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.clear()
        localStorage.clear();
        navigate("/login");
    }

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const classes = useStyles();

    let user = null
    if (guessuser === null) {
        console.log("login from gg")
        user = gguser
    } else if (gguser === null) {
        console.log("login from guess")
        user = guessuser
    }
    console.log(user)

return ( 
            <AppBar position="static" color='grey' >
                <Container maxWidth="x1">
                    <Toolbar disableGutters>
                            <Button 
                                onClick={() => {navigate("/createactivity");}}
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
                                    <Box onClick={() => {navigate("/createactivity");}}>
                                        <Typography textAlign="center" color="black">Create <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/activityadmin");}}>
                                        <Typography textAlign="center" color="black">List <FontAwesomeIcon icon={faBook}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/username");}}>
                                        <Typography textAlign="center" color="black">User <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/aboutadmin");}}>
                                        <Typography textAlign="center" color="black">About <FontAwesomeIcon icon={faComment}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>
                            </Menu>
                        </Box>

                        {/* box for app bar buttons */}
                        <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }}} className="hover-underline">
                                
                                <nav>
                                    <a href='/createactivity'>Create <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon></a>
                                    <a href='/activityadmin'>List <FontAwesomeIcon icon={faBook}></FontAwesomeIcon></a>
                                    <a href='/username'>User <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon></a>
                                    <a href='/aboutadmin'>About <FontAwesomeIcon icon={faComment}></FontAwesomeIcon></a>
                                </nav>
                        </Box>
                        
                        {/* box for user profile */}     
                        <Box>
                            <Typography>
                                {user.first_name + " " + user.last_name}
                            </Typography>
                        </Box>                   
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Menu">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1.5 }}>
                                    <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
                                </IconButton>
                            </Tooltip>
                            
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Button onClick= {handleLogout} className={classes.root}>Logout</Button>
                                </MenuItem>
                            </Menu>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
    );
};