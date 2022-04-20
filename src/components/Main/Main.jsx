import { Avatar } from "@mui/material";
import React from "react";
import photo from "../Images/AFC7099B-749A-4C22-87C5-84C89E22C15D.jpeg";
import "./Main.scss";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

const Main = () => {
  return (
    <div className="main container">
      <Avatar
        className="photo"
        alt="photo"
        src={photo}
        sx={{ width: 300, height: 300 }}
      />
      <div className="main-text">
        <h1>Erbol Nurmanbetov</h1>
        <h2>
          As a curious and daring person, I am willing to take on new challanges
          in order to grow
        </h2>
        <p className="pi">
          <span>📎</span> DOB: 15/09/1994 Kyrgyzstan, Bishkek
        </p>
        <p className="pi">
          <span>📎</span> Contacts: nurmanbetov1509@gmail.com
        </p>
        <p className="pi">
          <span>📎</span> Instagram: erlgotsomthin
        </p>
        <p className="pi">
          <span>📎</span> Slogan for life: "DO MORE!"
        </p>
      </div>
    </div>
  );
};

export default Main;
