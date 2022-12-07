import React from "react";
import "./style.css";
import Rightbar from "./components/Rightbar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/system";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        direction={"row"}
        sx={{ padding: 0 }}
        spacing={2}
        justifyContent="space-between"
      >
        <SideBar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
};

export default App;
