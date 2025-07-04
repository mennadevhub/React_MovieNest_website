import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ListItemIcon } from "@mui/material";


export default function DrawerSideBar({ handleSelectedCategory, handleSelectedItem ,handleAllCategories}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);


  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  async function getCat() {
    try {
      const res = await axios.get(url, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTA3YTcxNTUzMmMxYTk2ODRmZDRjNTYxMDk1Y2NhYSIsIm5iZiI6MTcyNzg2MjY5OS43NTgwMDAxLCJzdWIiOiI2NmZkMTdhYjZjMzY1OTg1YzhmMjNmMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aR2TSz0MCOlXSMoLjZClgfD_fcGz_Wf1Sf74gnFcD94",
        },
      });

      setCategories(res.data.genres);
      handleAllCategories(res.data.genres)
      // console.log(res.data.genres);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    getCat();
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  // const handleClickItem = (text) => {
  //   setTimeout(() => handleSelectedItem(text), 0);
  // };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>

      <List>
        {["All Movies"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {
              navigate(`/movies`);
              toggleDrawer(false);
            }}>
              <ListItemIcon>
              <ArrowForwardIosIcon sx={{color:"#FFC107"}} />
            </ListItemIcon>
              <ListItemText primary={text} sx={{fontWeight:"500", color:"black"}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {categories.map((genre, index) => (
          <ListItem key={genre.id} disablePadding>
          <ListItemButton
            onClick={() => {
              handleSelectedCategory(genre.id);
              navigate(`/movies/category/${genre.id}`);
              toggleDrawer(false);
            }}
          >
            <ListItemIcon>
              <ArrowForwardIosIcon sx={{color:"#FFC107"}} />
            </ListItemIcon>
            <ListItemText primary={genre.name} />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ color: "#FFC107", pt: 7, pb: 3, pl: 3, fontSize: "1rem" }}>
        <ArrowBackIosIcon sx={{ color: "white" }} />
        Choose a Category
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
} 