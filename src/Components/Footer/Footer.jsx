import React from "react";
import { Grid, Box, Typography, Link } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GestureIcon from '@mui/icons-material/Gesture';
import { LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const navToExternal = (url) => {
    window.open(url, '_blank');
  };
  return (
    <Box
      sx={{
        backgroundColor: "#212121",
        color: "#fff",
        py: 4,
        px: 2,
      }}
    >
      <Grid container spacing={4}
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}>
        {/* Logo Section */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: "1rem", fontSize: "2rem" }}>
            Movie<span style={{ color: '#FFC107' }}>Nest</span>
          </Typography>
        </Grid>

        {/* Company Section */}
        <Grid item xs={4} md={2} sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Company
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <Link
              href="/about"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              About
            </Link>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column"}}>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Careers
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Our Culture
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Giving

            </Link>
            <Box />
            <Box>
              <Link
                href="#"
                color="#BBBBBB"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#FFC107",
                  },
                }}
              >
                Partners
              </Link>
            </Box>
            <Box>
              <Link
                href="#"
                color="#BBBBBB"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#FFC107",
                  },
                }}
              >
                News
              </Link>
            </Box>
            <Box>
              <Link
                href="#"
                color="#BBBBBB"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#FFC107",
                  },
                }}
              >
                MovieNest Gear
              </Link>
            </Box>
            <Box>
              <Link
                href="#"
                color="#BBBBBB"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#FFC107",
                  },
                }}
              >
                The MovieNest Blog
              </Link>
            </Box>
            <Box>
              <Link
                href="#"
                color="#BBBBBB"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "#FFC107",
                  },
                }}
              >
                Advertise with Us
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* MovieNest Pass Section */}
        <Grid item xs={4} md={2} sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            MovieNest Pass
          </Typography>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Go Premium
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              MovieNest amp
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              MovieNest Labs
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Get Perks
            </Link>
          </Box>
        </Grid>

        {/* Downloads Section */}
        <Grid item xs={4} md={2} sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Downloads
          </Typography>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Media Server
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              MovieNest
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              MovieNestamp
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              MovieNest Photos
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              MovieNest Dash
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Where to Wartch
            </Link>
          </Box>
        </Grid>

        {/* Support Section */}
        <Grid item xs={6} md={2} sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Support
          </Typography>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Finding Help
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Support Library
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Community Forums
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Community Guidelines
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Builing Questions
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Status
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Bug Bounty
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              CardCutter
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Get in Touch
            </Link>
          </Box>
        </Grid>

        {/* Watch Free Section */}
        <Grid item xs={6} md={2} sx={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Watch Free
          </Typography>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Discover on MovieNest
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              TV Channel Finder
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              What to Watch
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
                whiteSpace: "nowrap", 
                display: "inline-block",
                            }}
            >
              What To Watch on Netflix
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              What To Watch on Hulu

            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              A24 movies
            </Link>
          </Box>
          <Box>
            <Link
              href="#"
              color="#BBBBBB"
              underline="none"
              sx={{
                "&:hover": {
                  color: "#FFC107",
                },
              }}
            >
              Christmas Movies
            </Link>
          </Box>
        </Grid>
      </Grid>

{/* Footer Bottom */}
<Box
  sx={{
    marginTop: "2rem",
    borderTop: "1px solid #333",
    paddingTop: "1rem",
    display: "flex", 
    justifyContent: "space-between",  
    alignItems: "center",  
  }}
>

  {/* Text Section */}
  <Typography variant="body2" color="#BBBBBB" component="span">
    Shahd & Menna &copy; 2025&nbsp;
    <Box
      component="span"
      sx={{
        color: "#BBBBBB",
        fontWeight: "bold",
        transition: "color 0.5s ease",
        "&:hover": {
          color: "#FFC107",
          cursor: "pointer",
        },
      }}
    >
      MovieNest
    </Box>
    <Box
      component="span"
      sx={{
        color: "#BBBBBB",
        textDecoration: "none",
        transition: "color 0.5s ease",
        "&:hover": {
          color: "#FFC107",
          textDecoration: "none",
          cursor: "pointer",
        },
      }}
    >
      &nbsp;| Privacy & legal&nbsp;
    </Box>
    <Box
      component="span"
      sx={{
        color: "#BBBBBB",
        textDecoration: "none",
        transition: "color 0.5s ease",
        "&:hover": {
          color: "#FFC107",
          textDecoration: "none",
          cursor: "pointer",
        },
      }}
    >
      &nbsp;| Accessibility &nbsp;
    </Box>
    <Box
      component="span"
      sx={{
        color: "#BBBBBB",
        textDecoration: "none",
        transition: "color 0.5s ease",
        "&:hover": {
          color: "#FFC107",
          textDecoration: "none",
          cursor: "pointer",
        },
      }}
    >
      &nbsp;| Manage cookies&nbsp;
    </Box>
  </Typography>

  {/* Icons Section */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",  // Vertically align icons in the center
    }}
  >
    <IconButton
      color="inherit"
      aria-label="Instagram"
      sx={{
        fontSize: "5rem",
        transition: "color 0.5s ease",
        "&:hover": {
          color: "#A35C7A",
        },
      }}
      onClick={()=>{navToExternal('https://www.instagram.com/')}}
    >
      <InstagramIcon />
    </IconButton>

    <IconButton
      color="inherit"
      aria-label="Facebook"
      sx={{
        fontSize: "5rem",
        transition: "color 0.5s ease",
        "&:hover": {
          color: "#344CB7",
        },
      }}
      onClick={()=>{navToExternal('https://www.facebook.com/')}}

    >
      <FacebookIcon />
    </IconButton>

    <IconButton
      color="inherit"
      aria-label="Gesture"
      sx={{
        fontSize: "5rem",
        transition: "color 0.5s ease",
        "&:hover": {
          color: "#DEAA79",
        },
      }}
      onClick={()=>{navToExternal('https://bsky.app/')}}

    >
      <GestureIcon />
    </IconButton>

    <IconButton
      color="inherit"
      aria-label="YouTube"
      sx={{
        fontSize: "5rem",
        transition: "color 0.5s ease",
        "&:hover": {
          color: "#F93827",
        },
      }}
      onClick={()=>{navToExternal('https://www.youtube.com/')}}
    >
      <YouTubeIcon />
    </IconButton>

    <IconButton
      color="inherit"
      aria-label="Edit"
      sx={{
        fontSize: "5rem",
        transition: "color 0.5s ease",
        "&:hover": {
          color: "#2196f3",
        },
      }}
      onClick={()=>{navToExternal('https://www.linkedin.com/')}}

    >
      <LinkedIn />
    </IconButton>
  </Box>

</Box>



    </Box>
  );
};

export default Footer;
