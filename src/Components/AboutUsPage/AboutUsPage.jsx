import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';

import SideImage from '../../imgs/side-img.png';


const AboutUsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const videoId = '1053754233';

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
      <Container maxWidth="l">
        <Typography
          variant='h4'
          sx={{
            fontWeight: 1000,
            mb: 4,
            textAlign: 'center',
            color: 'black.main'
          }}>We’re fans at heart.</Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 200,
            mb: 4,
            textAlign: 'center',
            color: 'text.secondary',
            fontFamily: 'Comfortaa, sans-serif',
          }}
        >
          Of movies, shows, music, and well, all things entertainment. So much so that we built an app that brings it all together—streaming services, personal media, ratings and watch lists.As beautiful as it is easy-to-use, MovieNest gives fans everywhere a way to discover, save, and enjoy the entertainment they love the most.
        </Typography>

        <Grid container spacing={4} alignItems="center" py={8}>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden', }} >
              <Box
               sx={{
                 position: 'relative', 
                 height: isMobile ? 300 : 400,
                 backgroundImage: `url(${SideImage})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 borderRadius: 2, 
               }}
             />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: isMobile ? '2rem' : '2.5rem',
                fontWeight: 'bold',
                mb: 5,
                color: 'gray'
              }}
            >
              Welcome to Movie<span style={{ color: '#FFC107' }}>Nest</span>
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                mb: 3,
                textAlign: 'justify',
                lineHeight: 1.6,
                color: 'main.secondary'
              }}
            >
              As we create a global community of streaming media, we know we need a team that represents the diversity of our users and a company culture that welcomes people to be their authentic selves, and we’re all in!
            </Typography>

            <Typography
              variant="body1"
              paragraph
              sx={{
                textAlign: 'justify',
                lineHeight: 1.6,
                color: 'main.secondary'
              }}
            >
              As a fully remote, global company, we take pride in our ability and dedication to building a workforce that represents our global audience. Our virtual work environment is intentionally designed to draw from all backgrounds, creating a sense of belonging and ownership for every employee.
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, mb: 8 }}>
          <Grid container spacing={4} justifyContent="center">

            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h2" sx={{
                  fontWeight: 'bold',
                  color: 'primary.main',
                  mb: 1
                }}>
                  25+  million
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  Global Users
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h2" sx={{
                  fontWeight: 'bold',
                  color: 'primary.main',
                  mb: 1
                }}>
                  50k+
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  On Demand Titles
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h2" sx={{
                  fontWeight: 'bold',
                  color: 'primary.main',
                  mb: 1
                }}>
                  600+
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                  Live TV Channels
                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />
        < Container maxWidth="md" sx={{ py: 4 }}>

          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Typography variant="h4" sx={{
                fontWeight: 'bold',
                color: 'text.primary',

              }}>
                Releasing soon in
              </Typography>
              <Typography variant="h2" sx={{
                fontWeight: 'bold',
                color: 'grey',
                textTransform: 'uppercase',
                paddingBottom: 7
              }}>
                Movie<span style={{ color: '#FFC107' }}>Nest</span>
              </Typography>
            </Box>
          </Grid>

          <Box sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            paddingTop: '56.25%',
            borderRadius: 2,
            boxShadow: 3
          }}>

            <iframe
              title="MovieNest Releasing soon "
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,

              }}
              src={`https://player.vimeo.com/video/${videoId}`}
              allowFullScreen
            />
          </Box>

        </Container>

        <Divider sx={{ my: 6 }} />

        <Box sx={{
          textAlign: 'center',
          maxWidth: 800,
          mx: 'auto',
          mb: 8
        }}>
          <Typography variant="h3" sx={{
            fontWeight: 'bold',
            mb: 3,
            color: 'text.primary'
          }}>
            Your Gateway to Endless Entertainment
          </Typography>

          <Typography variant="body1" sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
            fontSize: '1.1rem'
          }}>
            MovieNest is your ultimate streaming platform, offering a vast library of movies,
            TV shows, and original content. With personalized recommendations and
            seamless cross-device compatibility, discover new favorites and watch
            anywhere, anytime.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default AboutUsPage;

