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
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useNavigate } from 'react-router-dom';
import { withParam } from '../utils/Router.Helper';
import { toast } from 'react-toastify';

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
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState();

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

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  useEffect(() => {
    axios.get('basket/' + Cookies.get('user_id'))
    .then((data) => {
      setBasketBadge(data.data)
    })
    .catch((err) => {})
  },[])
{/* @ts-ignore */}
  console.log('basket badge', basketBadge?.length)
  const loginData = {
    "email" : email,
    "password" : password
  }

  const validations = () => {
    let error = {}
  
  
    if (!email) {
      error.email = 'Please enter your e-mail address'
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      error.email = 'Invalid e-mail'}
 
  
    if (!password) {
      error.password = 'Please enter your password'
    } else if (password.length < 8) {
      error.password = 'Your password must contain at least 8 characters'
    }

    // if(!password == password || !email == email){ //Wrong Email or password needs data(needs to be done by back-end team//
    //   error.email='Incorrect username or password'
    //   error.password='Incorrect username or password'
    // }
  
    setError(error);

  }


  const userLogin = () => {
    // if(validations()){
      axios.post("user/signin", loginData).then((data) => {
        Cookies.set("jwtToken", data.data.token, { path: "/" });
        Cookies.set("user_id", data.data.userId, { path: "/" });
        Cookies.set("Fname", data.data.fName, { path: "/" });
        Cookies.set("Lname", data.data.lName, { path: "/" });
        Cookies.set("status", data.data.status, {path: "/"} )
        Cookies.set("membership", data.data.membership, {path: "/"})
      }).then(() => window.location.reload()).catch((err) => {toast.error(err.response.data)})
    // }
  };

  console.log('Login info', login)
  console.log('Cookie UserID', Cookies.get('user_id'))
  console.log('Cookie JWT', Cookies.get('jwtToken'))

  

  const clearCookie = () => {
    Cookies.remove('jwtToken');
    Cookies.remove('user_id');
    Cookies.remove('Fname');
    Cookies.remove('Lname');
  }

  const navigate = useNavigate();
  const submit = () => {
    navigate("/search/"+searchValue)
  }

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleSubmit = () => {
    // Here you can implement your logic to process the order

    // console.log('Order placed with card details:', { cardNumber, expiryDate, cvv });
    axios.post("change-membership", {"userId" : Cookies.get("user_id")})
    .then(toast.success("Congratulations!"))
    .then(Cookies.set("membership", 2))
    // Reset the form after submission
    setCardNumber('');
    setExpiryDate('');
    setCVV('');
  };


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
        <form onSubmit={submit}>
        <Box display={'flex'} alignItems={'center'}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => {setSearchValue(e.target.value)}}
            />
          </Search>
        </Box>
        </form>
        <Box display={'flex'} alignItems={'center'}>
            <IconButton href='/CartTwo'>
              {/* @ts-ignore */}
            <Badge badgeContent={basketBadge?.length} color="primary">
                <ShoppingCartOutlinedIcon/>
            </Badge>
            </IconButton>
            {Cookies.get('jwtToken') ? 
            <>
            <IconButton href={'/account/' + Cookies.get("user_id")}>
                <AccountCircleOutlinedIcon/>
            </IconButton>
            <Typography color={'#929191'}>
                Hello,
                {" "+Cookies.get('Fname')}
            </Typography> 
            <IconButton href='/' onClick={clearCookie}>
              <LogoutRoundedIcon/>
            </IconButton>
            </>
            :
            <IconButton onClick={handleOpen}>
                <LoginRoundedIcon/>
            </IconButton>
            }
            {/* */}
            </Box>
          </Box>
          <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={2} >
            <Button sx={{backgroundColor:'#4DB528',visibility:'hidden', "&:hover" : {backgroundColor:'#4DB528'}, height:'3.5rem', textTransform:'none', fontWeight:'700'}} variant='contained' startIcon={<FormatAlignLeftRoundedIcon/>} endIcon={<KeyboardArrowDownRoundedIcon/>}>
                All Categories
            </Button>
            <Box width={'35%'} display={'flex'} alignItems={'center'} textAlign={'center'} justifyContent={'space-evenly'}>
                <Button href='/explore' sx={{color:'#000', fontWeight:'700', textTransform:'none'}} endIcon={<KeyboardArrowDownRoundedIcon/>}>
                    Explore
                </Button>
                <Button href='/AboutUs' sx={{color:'#000', fontWeight:'700', textTransform:'none'}} endIcon={<KeyboardArrowDownRoundedIcon/>}>
                    About us
                </Button>
                <Button href='/ContactUs' sx={{color:'#000', fontWeight:'700', textTransform:'none'}} endIcon={<KeyboardArrowDownRoundedIcon/>}>
                    Contact us
                </Button>
                {Cookies.get("status") == 'A' ? 
                
                <Button href='/admin/sales' sx={{color:'#000', fontWeight:'700', textTransform:'none'}} endIcon={<KeyboardArrowDownRoundedIcon/>}>
                    Admin
                </Button>
                :
                <></>
              }
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              {Cookies.get("jwtToken") ? 
            <Button onClick={handleOpen1} disabled={Cookies.get("membership") == 2} sx={{color:'#4DB528',backgroundColor:'#E7F7F3', "&:hover" : {backgroundColor:'#E7F7F3'}, height:'3.5rem', textTransform:'none', fontWeight:'700'}} variant='contained' startIcon={<BoltOutlinedIcon/>}>
                {Cookies.get("membership") == 2 ? 
                  "Unikart plus member"
                  :
                   "Get Unikart plus"
                }
            </Button>
            :
            <Button onClick={handleOpen1} sx={{visibility:'hidden',color:'#4DB528',backgroundColor:'#E7F7F3', "&:hover" : {backgroundColor:'#E7F7F3'}, height:'3.5rem', textTransform:'none', fontWeight:'700'}} variant='contained' startIcon={<BoltOutlinedIcon/>}>
                Get Unikart +
            </Button>
              }
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
                // @ts-ignore
                onChange={(e)=>{setEmail(e.target.value)}}
                error={error && error.email} helperText={error && error.email}
               
              />
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
                // @ts-ignore
                onChange={(e)=>{setPassword(e.target.value)}}
                error={error && error.password} helperText={error && error.password}
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
          <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open1}>
          <Box sx={style}>
            <Typography sx={{ marginBottom: "20px" }} variant="h5">
              Get Unikart + at just £10 per month
            </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
          label="Card Number"
          fullWidth
          variant="outlined"
          value={cardNumber}
          onChange={handleCardNumberChange}
          style={{ marginBottom: '20px', borderColor: 'green' }}
        />
        <TextField
          label="Expiry Date (MM/YY)"
          fullWidth
          variant="outlined"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          style={{ marginBottom: '20px', borderColor: 'green' }} 
        />
        <TextField
          label="CVV"
          fullWidth
          variant="outlined"
          value={cvv}
          onChange={handleCVVChange}
          style={{ marginBottom: '20px', borderColor: 'green'}} 
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          style={{ marginBottom: '20px', borderColor: 'green' }} 
          onClick={()=>{handleSubmit(); handleClose1();}}
        >
          Place Order
        </Button>
      </form>
          </Box>
        </Fade>
          </Modal>
    </Container>
    </AppBar>
   </>
  )
}

export default withParam(NavbarSearch)