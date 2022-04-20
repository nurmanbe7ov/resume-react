import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <AppBar className="nav container">
      <Toolbar style={{ color: "black" }}>
        <Typography variant="h5" sx={{ flexGrow: 2 }}>
          EN
        </Typography>
        <Typography variant="h5" sx={{ flexGrow: -1 }}>
          Resume
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
