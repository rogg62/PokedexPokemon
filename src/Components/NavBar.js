import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import CatchingPokemonSharpIcon from "@mui/icons-material/CatchingPokemonSharp";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

import "./NavBar.css";
import Logo from "../Assets/pokemon.svg";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <AppBar id="AppBar" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon id="burguer" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={Logo} id="Logo" alt="" />
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link className="Link" to="/">
                  Home
                </Link>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CatchingPokemonSharpIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link className="Link" to="/Primeira">
                  Primeira Geração
                </Link>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CatchingPokemonSharpIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link className="Link" to="/Segunda">
                  Segunda Geração
                </Link>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CatchingPokemonSharpIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link className="Link" to="/Terceira">
                  Terceira Geração
                </Link>
              }
            />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
