import React, { useState , useEffect} from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  Typography,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Apple, Close } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import img1 from '../../imgs/Containment (2015).jpg';
import img2 from '../../imgs/download (10).jpg';
import img3 from '../../imgs/Jurassic World_ Dominion (2022).jpg';
import img4 from '../../imgs/The Family Plan (2023).jpg';
import img5 from '../../imgs/Centigrade.jpg';
import img6 from '../../imgs/Extinction Miguel Angel Vivas.jpg';

const sliderImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];


export const SignIn = ({ open, onClose, onSwitchAuth, onLoginSuccess }) => {

    useEffect(() => {
    if (open) {
      const root = document.getElementById("root");
      if (root) {
        root.removeAttribute("aria-hidden");
      }

      document.getElementById("email-input")?.focus();
    }
  }, [open]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const passwordRequirements = {
    length: password.length >= 10,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*]/.test(password),
  };

  const isPasswordValid = Object.values(passwordRequirements).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div>
      <Button
        sx={{
          color: '#fff',
          mr: 3,
          '&:hover': { color: '#FBBC04', bgcolor: '#1A1A1D' },
        }}
        onClick={() => onSwitchAuth(true)}
      >
        Sign Up
      </Button>

      <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
        <DialogTitle>
          <IconButton onClick={() => { onClose(false) }} sx={{ position: "absolute", right: 10, top: 10 }}>
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <form >
            <Grid container spacing={2}>
              {isLargeScreen && (
                <Grid item md={6}>
                  <Slider
                    dots
                    infinite
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay
                    autoplaySpeed={3000}
                  >
                    {sliderImages.map((img, index) => (
                      <img key={index} src={img} alt={`Slide ${index}`} style={{ width: "100%", borderRadius: 10 }} />
                    ))}
                  </Slider>
                </Grid>
              )}

              <Grid item xs={12} md={isLargeScreen ? 6 : 12}>
                <Box >
                  <Typography variant="h3" sx={{ fontSize: 35, textAlign: "center", fontWeight: "600" }} gutterBottom>
                    Account Sign in
                  </Typography>

                </Box>
                <Box display="flex" flexDirection="column" gap={2} sx={{ paddingTop: 6 }}>
                  <Button variant="outlined" color="black" startIcon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path><path d="M1 1h22v22H1z" fill="none"></path></svg>} fullWidth>
                    Continue with Google
                  </Button>
                  <Button variant="contained" sx={{ backgroundColor: "black" }} startIcon={<Apple />} fullWidth>
                    Continue with Apple
                  </Button>
                </Box>

                <Box display="flex" alignItems="center" gap={2} sx={{ paddingTop: 7 }}>
                  <Box flex={1} height={1} bgcolor="text.disabled" />
                  <Typography variant="body2" color="textSecondary" textAlign={"center"}>
                    By signing up or continuing to use Plex you confirm that you've read and accept the <Link to="https://www.plex.tv/about/privacy-legal/plex-terms-of-service" target="_blank">Terms of Service</Link> and <Link to="https://www.plex.tv/about/privacy-legal" target="_blank" >Privacy Policy</Link>
                  </Typography>
                  <Box flex={1} height={1} bgcolor="text.disabled" />
                </Box>

                <Typography align="center" sx={{ paddingTop: 5 }}>OR</Typography>

                <TextField
                  label="Email or Username"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                />

                <TextField
                  label=" Password"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                />

                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  type="submit"
                  disabled={!isPasswordValid || !email}
                  style={{ marginTop: 16 }}
                  onClick={handleSubmit}

                >
                  Sign In
                </Button>
                <Typography variant="body1" color="black" sx={{ textAlign: "center", paddingTop: 5 }} >Need an account? Press the Google or Apple buttons above, or<br /> <Link component="button" onClick={() => {
                  onClose();
                  onSwitchAuth();
                }} > Sign Up with email</Link></Typography>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>

    </div>
  );
};
export default SignIn;





















