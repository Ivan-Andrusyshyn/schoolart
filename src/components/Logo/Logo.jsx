import { Typography } from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";

export const Logo = () => {
  return (
    <Typography
      variant="h6"
      component="div"
      style={{
        fontSize: 24,
        color: "#ffffff",
        display: "flex",
        gap: 10,
      }}
    >
      <span style={{ color: "#ff0000ca" }}>
        <PaletteIcon style={{ fontSize: 32, verticalAlign: "middle" }} />
      </span>
      <div style={{ width: 100 }}>
        <span style={{ color: "#0077ff" }} className="title-header-desc">
          Art
        </span>
        <span style={{ color: "#c4da00" }} className="title-header-desc">
          school
        </span>
      </div>
    </Typography>
  );
};
