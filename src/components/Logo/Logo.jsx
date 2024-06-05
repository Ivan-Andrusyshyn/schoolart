import { Typography } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import "./styles.css";

export const Logo = () => {
  return (
    <Typography variant="h6" component="div" className="logo">
      <span className="logo-icon">
        <PaletteIcon />
      </span>
      <div className="logo-text">
        <span className="title-header-desc art">Art</span>
        <span className="title-header-desc school">school</span>
      </div>
    </Typography>
  );
};
