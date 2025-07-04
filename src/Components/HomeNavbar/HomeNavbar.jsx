import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText,
  Toolbar, Typography, Button, Menu, MenuItem, Snackbar, Avatar
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import MenuIcon from '@mui/icons-material/Menu';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { useNavigate } from 'react-router-dom';
import SignUp from '../SignUp/SignUp.jsx';
import SignIn from '../SignIn/SignIn.jsx';

const drawerWidth = 240;
const navItems = [
  { page: 'Home', route: '/' },
  { page: 'About', route: '/about' },
  { page: 'Contact', route: '/contact' },
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function HomeNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const navigate = useNavigate();
  
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(localStorage.getItem('authToken')));

  const handleMenuOpen = (event) => setAvatar(event.currentTarget);
  const handleMenuClose = () => setAvatar(null);

  const handleLoginSuccess = () => {
    localStorage.setItem('authToken', 'your-auth-token-here');
    setIsLoggedIn(true);
    showSnackbar('Successfully logged in!', 'success');
  };

  const handleSignupSuccess = () => {
    localStorage.setItem('authToken', 'your-auth-token-here');
    setIsLoggedIn(true);
    showSnackbar('Successfully registered!', 'success');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    handleMenuClose();
    showSnackbar('Successfully logged out!', 'info');
    navigate('/');
  };

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleOpenSignIn = () => { setSignUpOpen(false); setSignInOpen(true); };
  const handleOpenSignUp = () => { setSignInOpen(false); setSignUpOpen(true); };
  const handleCloseDialogs = () => { setSignInOpen(false); setSignUpOpen(false); };
  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  React.useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem('authToken')));
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}><Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" sx={{ ml: 2, '&:hover': { color: '#FBBC04' } }}>
              <SlideshowIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 2, fontWeight: 700 }}>
              Movie<span style={{ color: '#FFC107' }}>Nest</span>
            </Typography>
          </Box></Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.page} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.route)}>
              <ListItemText primary={item.page} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        {!isLoggedIn ? (
          <>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={handleOpenSignIn}>
                <ListItemText primary="Sign In" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={handleOpenSignUp}>
                <ListItemText primary="Sign Up" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} sx={{ textAlign: 'center' }}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#1A1A1D', color: '#fff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" sx={{ ml: 2, '&:hover': { color: '#FBBC04' } }}>
              <SlideshowIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 2, fontWeight: 700 }}>
              Movie<span style={{ color: '#FFC107' }}>Nest</span>
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button key={item.page} sx={{ color: '#fff', mx: 3, '&:hover': { color: '#FBBC04' } }} onClick={() => navigate(item.route)}>
                {item.page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {!isLoggedIn ? (
              <>
                <Button onClick={handleOpenSignUp} sx={{ color: '#fff', mr: 3, '&:hover': { color: '#FBBC04' } }}>
                  Sign Up
                </Button>
                <Button onClick={handleOpenSignIn} sx={{ color: '#fff', '&:hover': { color: '#FBBC04' } }}>
                  Sign In
                </Button>
              </>
            ) : (
              <>
                <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="" sx={{ width: 50, height: 50 }} />
                </IconButton>
                <Menu avatar={avatar} open={Boolean(avatar)} onClose={handleMenuClose}>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </Box>

          <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SignIn open={signInOpen} onClose={handleCloseDialogs} onSwitchAuth={handleOpenSignUp} onLoginSuccess={handleLoginSuccess} />
      <SignUp open={signUpOpen} onClose={handleCloseDialogs} onSwitchAuth={handleOpenSignIn} onSignupSuccess={handleSignupSuccess} />

      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity={snackbarSeverity}>{snackbarMessage}</Alert>
      </Snackbar>

      <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ '& .MuiDrawer-paper': { width: drawerWidth, backgroundColor: '#1A1A1D', color: '#fff' } }}>
        {drawer}
      </Drawer>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

HomeNavbar.propTypes = { window: PropTypes.func };
export default HomeNavbar;













