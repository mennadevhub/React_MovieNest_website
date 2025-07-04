import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
}));

export default function DevicesBox() {

  return (
    <Box sx={{ width: "100%", p: 4, mb: 4 }}>
      <Stack spacing={1} alignItems="center">
        <Typography sx={{ color: "white", fontWeight: "800", fontSize: "1.5rem", mt: 2 }}>
          Take MovieNest everywhere
        </Typography>
        <Typography sx={{ color: "#B7B7B7" }}>
          Watch free anytime, anywhere, on almost any device
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {/* First Row */}
          <Grid container item spacing={3} xs={12} sm={10} md={8} justifyContent="center">
            {[
              { name: "ROKU" },
              { name: "SAMSUNG" },
              { name: "Fire Tv" },
              { name: "Android", icon: <AndroidIcon sx={{ marginLeft: 1, fontSize: "1.5rem", color: "#3C3D37" }} /> },
            ].map((platform, index) => (
              <Grid key={index} item xs={6} sm={3} display="flex" justifyContent="center">
                <Typography sx={{ fontWeight: 600, fontSize: "1.5rem", color: "#3C3D37", display: "flex", alignItems: "center" }}>
                  {platform.name} {platform.icon}
                </Typography>
              </Grid>
            ))}
          </Grid>

          {/* Second Row */}
          <Grid container item spacing={3} xs={12} sm={10} md={8} justifyContent="center">
            {[
              { name: "TV", icon: <AppleIcon sx={{ fontSize: "1.5rem", marginRight: 1, color: "#3C3D37" }} /> },
              { name: "IOS", icon: <AppleIcon sx={{ fontSize: "1.5rem", marginRight: 1, color: "#3C3D37" }} /> },
              { name: "Chromecast" },
              { name: "XBOX" },
            ].map((platform, index) => (
              <Grid key={index} item xs={6} sm={3} display="flex" justifyContent="center">
                <Typography sx={{ fontWeight: 600, fontSize: "1.5rem", color: "#3C3D37", display: "flex", alignItems: "center" }}>
                  {platform.icon} {platform.name}
                </Typography>
              </Grid>
            ))}
          </Grid>

          {/* Third Row */}
          <Grid container item spacing={3} xs={12} sm={10} md={8} justifyContent="center">
            {[
              { name: "NVIDIA" },
              { name: "V120" },
              { name: "PS" },
              { name: "LG" },
            ].map((platform, index) => (
              <Grid key={index} item xs={6} sm={3} display="flex" justifyContent="center">
                <Typography sx={{ fontWeight: 600, fontSize: "1.5rem", color: "#3C3D37", display: "flex", alignItems: "center" }}>
                  {platform.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

