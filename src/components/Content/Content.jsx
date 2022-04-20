import { CircularProgress, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Content.scss";

const Content = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>SKILLS</h1>
        <div>
          <Stack className="content-inner" spacing={2} direction="row">
            <CircularProgress variant="determinate" value={50} />
            <h3>JavaScript</h3>
            <CircularProgress variant="determinate" value={50} />
            <h3>React</h3>
            <CircularProgress variant="determinate" value={50} />
            <h3>Node.js</h3>
            <CircularProgress variant="determinate" value={75} />
            <h3>HTML/CSS</h3>
            <CircularProgress variant="determinate" value={50} />
            <h3>Native.js</h3>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Content;
