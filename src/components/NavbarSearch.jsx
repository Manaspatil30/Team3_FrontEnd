import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../images/Logo1.png';
import { Button, Container, Link, ListItemIcon, ListItemText, MenuItem, Select } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FormatAlignLeftRoundedIcon from '@mui/icons-material/FormatAlignLeftRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Cookies from 'js-cookie';
import Badge from '@mui/material/Badge';

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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#FFF',
    marginLeft: 0,
    width: '100%',
    display:'flex',
    justifyContent:'right',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    borderRadius:'10px',
    textAlign:'right',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FF7C0A'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#A49E9E',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '65ch'
      },
    },
  }));
  

const NavbarSearch = () => {
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


  return (
   <>
<AppBar position="sticky" sx={{backgroundColor:'#F6F6F6', boxShadow:'none'}}>
   <Container maxWidth='xl' sx={{ flexGrow: 1 }}>
          <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Box sx={{ padding: "10px" }}>
              <Link href='/'>
                <img src={Logo} height={"50px"} width={"auto"} />
              </Link>
            </Box>
            {/* <Select
            sx={{width:'8rem', height:'2.5rem', color:'#000'}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
        <Box display={'flex'} alignItems={'center'}>
            <Select
            sx={{width:'8rem', height:'2.5rem',}}
            label = "Location"
            >
                <MenuItem
                    // key={}
                    // value={}
                >
                <ListItemIcon sx={{minWidth: 36}}>
                    <LocationOnIcon/>
                </ListItemIcon>
                B16 9DP
                </MenuItem>

                <MenuItem
                    // key={}
                    // value={}
                >
                <ListItemIcon sx={{minWidth: 36}}>
                    <LocationOnIcon/>
                </ListItemIcon>
                B16 9DP
                </MenuItem>

                <MenuItem
                    // key={}
                    // value={}
                >
                <ListItemIcon sx={{minWidth: 36}}>
                    <LocationOnIcon/>
                </ListItemIcon>
                B16 9DP
                </MenuItem>
            </Select>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
            <IconButton href='/cart'>
            <Badge badgeContent={basketBadge?.length} color="primary">
                <ShoppingCartOutlinedIcon/>
            </Badge>
            </IconButton>
            <IconButton onClick={handleOpen}>
                <LoginRoundedIcon/>
            </IconButton>
            {/* <IconButton>
                <AccountCircleOutlinedIcon/>
            </IconButton>
            <Typography color={'#929191'}>
                Hello,
                Manas Patil
            </Typography> */}
            </Box>
          </Box>
          <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}mb={2} >
            <Button sx={{backgroundColor:'#4DB528', "&:hover" : {backgroundColor:'#4DB528'}, height:'3.5rem', textTransform:'none', fontWeight:'700'}} variant='contained' startIcon={<FormatAlignLeftRoundedIcon/>} endIcon={<KeyboardArrowDownRoundedIcon/>}>
                All Categories
            </Button>
            <Box width={'35%'} display={'flex'} alignItems={'center'} textAlign={'center'} justifyContent={'space-between'}>
                <Button href='/explore' sx={{color:'#000', fontWeight:'700', textTransform:'none'}} endIcon={<KeyboardArrowDownRoundedIcon/>}>
                    Explore
                </Button>
                <Button sx={{color:'#000', fontWeight:'700', textTransform:'none'}} endIcon={<KeyboardArrowDownRoundedIcon/>}>
                    About us
                </Button>
                <Button sx={{color:'#000', fontWeight:'700', textTransform:'none'}} endIcon={<KeyboardArrowDownRoundedIcon/>}>
                    Contact us
                </Button>
                <Button sx={{color:'#000', fontWeight:'700', textTransform:'none'}} endIcon={<KeyboardArrowDownRoundedIcon/>}>
                    Blog
                </Button>
            </Box>
            <Box display={'flex'} alignItems={'center'}>
            <Button sx={{color:'#4DB528',backgroundColor:'#E7F7F3', "&:hover" : {backgroundColor:'#E7F7F3'}, height:'3.5rem', textTransform:'none', fontWeight:'700'}} variant='contained' startIcon={<BoltOutlinedIcon/>}>
                Deal Today
            </Button>
            </Box>
          </Box>
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
            <Button sx={{ marginBottom: "20px" }} variant="contained" onClick={()=>{userLogin();}}>
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
    </Container>
      </AppBar>
   </>
  )
}

export default NavbarSearch