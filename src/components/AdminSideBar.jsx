import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';



const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
  
  }),
);

export default function AdminSideBar() {
  
  const [open] = React.useState(true);
  const navigate = useNavigate();





  return (
    <Box sx={{ display: 'flex' }}>

      <Drawer sx={{'& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper' : {top:'20%', position:'sticky', zIndex:'0'}}} variant="permanent" open={open}>
        <Divider />
        <List >
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate('/admin')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <HomeIcon color='info'/> 
                </ListItemIcon>
                <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => {navigate('/admin/sales')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <CurrencyPoundIcon color='secondary'/> 
                </ListItemIcon>
                <ListItemText primary='Sales' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}onClick={() => {navigate('/admin/products')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <InventoryIcon color='warning' /> 
                </ListItemIcon>
                <ListItemText primary='Products' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}onClick={() => {navigate('/admin/customers')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <PersonSearchIcon color='success'/> 
                </ListItemIcon>
                <ListItemText primary='Customers' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}onClick={() => {navigate('/admin/admins')}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <AdminPanelSettingsIcon color='error'/> 
                </ListItemIcon>
                <ListItemText primary='Admins' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
        </ListItem>
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>

        </Typography>
        <Typography paragraph>

        </Typography>
      </Box>
    </Box>
  );
}
