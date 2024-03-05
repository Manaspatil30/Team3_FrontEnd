import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../images/Logo1.png';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import { Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const pages = ['Explore', 'Stores', 'Sign in'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:'10px',
  boxShadow: 24,
  p: 4,
  textAlign:'center'
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [basketBadge , setBasketBadge] = useState();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [login, setlogin] = useState();

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios.get('basket/1').then((data) => {
      setBasketBadge(data.data)
    })
  },[])

  console.log('basket badge', basketBadge?.length)
  const loginData = {
    "email" : email,
    "password" : password
  }

  const userLogin = () => {
    axios.post('signin', loginData).then((data) => {Cookies.set('jwtToken',data.data.token,{path:'/'})}).then((data) => {Cookies.set('user_id',data.data.userId,{path:'/'})})
  }

  console.log('Login info', login)

  

  const clearToken = () => {
    Cookies.remove('jwtToken', {path:'/'})
  }

  // console.log('basket badge', basketBadge);

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#edf3fd", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Box sx={{ padding: "10px" }}>
                <img src={Logo} height={"50px"} width={"auto"} />
              </Box>
            </Typography>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={Logo} />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
                marginRight: "2rem",
              }}
            >
              {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', color:'#000', fontWeight:'700' }}
              >
                {page}
              </Button>
            ))} */}
              <Button
                href="/explore"
                sx={{
                  my: 2,
                  display: "block",
                  color: "#000",
                  fontWeight: "700",
                }}
              >
                Explore
              </Button>
        {
          Cookies.get('jwtToken') ? 
              <Button
              onClick={()=>{clearToken()}}
              href='/'
              sx={{
                my: 2,
                display: "block",
                color: "#000",
                fontWeight: "700",
              }}
            >
              Logout
            </Button>
            :

              <Button
                onClick={handleOpen}
                sx={{
                  my: 2,
                  display: "block",
                  color: "#000",
                  fontWeight: "700",
                }}
              >
                Sign in
              </Button>
        }


              <IconButton href='/cart' sx={{margin:'auto 0'}}>
              <Badge badgeContent={basketBadge?.length} color="primary">
                <ShoppingCartIcon color="action" />
              </Badge>
              </IconButton>
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography sx={{ marginBottom: "20px" }} variant="h3">
              Log in
            </Typography>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </Box>
            <Button sx={{ marginBottom: "20px" }} variant="contained" href='/' onClick={()=>{userLogin(); handleClose()}}>
              Log in
            </Button>
            <Box>
              <Link href="/signUp">
                <Typography variant="caption">new user? Sign up!</Typography>
              </Link>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Navbar;