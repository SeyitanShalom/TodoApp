import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <Box
      sx={{
        height: "50px",
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        // backgroundImage:
        //   "linear-gradient(to right, rgba(0, 139, 139,.3), darkcyan,darkcyan, darkcyan, rgba(0, 139, 139,.3))",
        backgroundColor: "darkcyan",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          fontFamily: "nunito",
          color: "beige",
        }}
      >
        Total Todos:{totalTodos}
      </Typography>
      <Typography
        sx={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          fontFamily: "nunito",
          color: "beige",
        }}
      >
        Completed Todos:{completedTodos}
      </Typography>
    </Box>
  );
}
