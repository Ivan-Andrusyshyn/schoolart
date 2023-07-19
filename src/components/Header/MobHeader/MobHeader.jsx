import { Icon } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { blue, orange, green } from "@mui/material/colors";
import "./mobHeader.css";
import "../header.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PaletteIcon from "@mui/icons-material/Palette";
import Typography from "@mui/material/Typography";

export const MobHeader = ({ setAnchorEl, anchorEl }) => {
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const LinkButton = ({ icon, label }) => (
    <IconButton aria-label={label} sx={{ color: blue[500] }}>
      {icon}
    </IconButton>
  );
  return (
    <div className="app-container">
      <Typography
        variant="h6"
        component="div"
        style={{ fontSize: 20, color: "#ffffff", display: "flex", gap: 10 }}
      >
        <span style={{ color: "#ff0000ca" }}>
          <PaletteIcon style={{ fontSize: 30, verticalAlign: "middle" }} />
        </span>
        <div>
          <span style={{ color: "#0077ff" }}>Art</span>
          <span style={{ color: "#c4da00" }}> school</span>
        </div>
      </Typography>
      <IconButton
        className="icon-button"
        edge="end"
        aria-label="menu"
        style={{ color: "#fff" }}
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        className="menu"
      >
        <MenuItem className="menu-item" onClick={handleMenuClose}>
          <HomeIcon className="icon-mob-menu" />
          <p className="mob-menu-text">Головна</p>
        </MenuItem>

        <MenuItem className="menu-item" onClick={handleMenuClose}>
          <MonetizationOnIcon className="icon-mob-menu" />
          <p className="mob-menu-text">Ціни</p>
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleMenuClose}>
          <ContactPhoneIcon className="icon-mob-menu" />
          <p className="mob-menu-text">Контакти</p>
        </MenuItem>
        <MenuItem className="menu-item" onClick={handleMenuClose}>
          <InfoIcon className="icon-mob-menu" />
          <p className="mob-menu-text">Про нас</p>
        </MenuItem>
      </Menu>
    </div>
  );
};
