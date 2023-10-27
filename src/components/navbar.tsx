import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import MessageIcon from '@mui/icons-material/Message';
import GroupsIcon from '@mui/icons-material/Groups';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Minha conta</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messagens</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notificações</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ffa500", height: "75px", borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
        <Toolbar>
        <img src="https://cdn-icons-png.flaticon.com/512/656/656579.png" alt="imagem" style={{width: '70px', height: '71px', padding: 20}}></img>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", fontSize: 25, fontWeight: 'bold' } }}
          >
            Netciso
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
            sx={{ Color: "#fff", width: '250px' }}
              placeholder="Pesquisar…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <div style={{ display: "flex" }}>
          <IconButton>
            <Badge color="error">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <HomeRoundedIcon sx={{ fontSize: 30, color: 'white' }} />
                <p style={{ margin: 0, fontSize: '17px', marginTop: 5, color: 'white' }}>Início</p>
              </div>
            </Badge>
          </IconButton>
          <IconButton>
            <Badge color="error">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <GroupsIcon sx={{ fontSize: 30, color: 'white' }} />
                <p style={{ margin: 0, fontSize: '17px', marginTop: 5, color: 'white' }}>Comunidade</p>
              </div>
            </Badge>
          </IconButton>
          <IconButton>
            <Badge color="error">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <QuestionAnswerOutlinedIcon sx={{ fontSize: 30, color: 'white' }} />
                <p style={{ margin: 0, fontSize: '17px', marginTop: 5, color: 'white' }}>Discussões</p>
              </div>
            </Badge>
          </IconButton>
          <IconButton>
            <Badge color="error">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <EventAvailableRoundedIcon sx={{ fontSize: 30, color: 'white' }} />
                <p style={{ margin: 0, fontSize: '17px', marginTop: 5, color: 'white' }}>Eventos</p>
              </div>
            </Badge>
          </IconButton>
          <IconButton>
            <Badge color="error">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <AppRegistrationRoundedIcon sx={{ fontSize: 30, color: 'white' }} />
                <p style={{ margin: 0, fontSize: '17px', marginTop: 5, color: 'white' }}>Recursos</p>
              </div>
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <MessageIcon sx={{ fontSize: 30, color: 'white' }} />
                <p style={{ margin: 0, fontSize: '17px', marginTop: 5, color: 'white' }}>Mensagens</p>
              </div>
            </Badge>
          </IconButton>

          <IconButton>
            <Badge badgeContent={17} color="error">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <NotificationsIcon sx={{ fontSize: 30, marginBottom: 0, color: 'white'}} />
                <p style={{ margin: 0, fontSize: '17px', marginTop: 5, color: 'white' }}>Notificações</p>
              </div>
            </Badge>
          </IconButton>

          <IconButton>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <AccountCircle sx={{ fontSize: 30, color: 'white' }} />
              <p style={{ margin: 0, fontSize: '17px', marginTop: 5, color: 'white' }}>Perfil</p>
            </div>
          </IconButton>
        </div>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
