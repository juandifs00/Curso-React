import { useDispatch } from "react-redux";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { startLogout } from "../../store/auth/thunks";

const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" noWrap component="div">
            Journal App
          </Typography>

          <IconButton onClick={onLogout} color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
