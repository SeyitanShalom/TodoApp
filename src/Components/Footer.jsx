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
          fontSize: { xs: "1rem", md: "1.3rem" },
          fontWeight: "bold",
          fontFamily: "nunito",
          color: "white",
        }}
      >
        Total Todos:{totalTodos}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.3rem" },
          fontWeight: "bold",
          fontFamily: "nunito",
          color: "white",
        }}
      >
        Completed Todos:{completedTodos}
      </Typography>
    </Box>
  );
}
