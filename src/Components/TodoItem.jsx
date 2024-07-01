import { Box, Typography, IconButton, Stack } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import React from "react";

export default function TodoItem({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
    console.log("Delete button clicked for item", item.name);
  };
  const handleClick = (name) => {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log(todos);
  };
  return (
    <Box
      sx={{
        width: { xs: "350px", sm: "400px", md: "600px" },
        marginTop: "50px",
        marginBottom: "100px",
        boxShadow: "0 4px 1px  rgba(0, 70, 70, .2)",
        padding: "0 20px",
      }}
    >
      {sortedTodos.map((item) => {
        return (
          <Stack
            direction="row"
            sx={{
              backgroundImage:
                "linear-gradient(to right,  rgb(0, 139, 139), darkcyan, whitesmoke)",
              color: "white",
              padding: { xs: "12px", sm: "15px", md: "20px" },
              marginTop: "25px",
              marginBottom: "25px",
              borderRadius: "5px",
              boxShadow: "0 2px 3px rgba(0, 70, 70, .5)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            key={item.name}
          >
            <Typography
              onClick={() => handleClick(item.name)}
              sx={
                item.done
                  ? {
                      fontSize: { xs: "15px", md: "17px" },
                      textDecoration: "line-through",
                      fontWeight: "bold",
                    }
                  : {
                      fontWeight: "bold",
                      fontSize: { xs: "17px", md: "20px" },
                    }
              }
            >
              {item.name}
            </Typography>

            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(item)}
              sx={{
                backgroundColor: "darkcyan",
                width: { xs: "28px", md: "38px" },
                height: { xs: "28px", md: "38px" },
                "&:hover": {
                  border: "3px solid rgba(0, 139, 139, .8)",
                  color: "darkcyan",
                  boxShadow: "0 2px 4px rgb(0, 0, 0, 0.2)",
                },
              }}
            >
              <RemoveCircleIcon
                sx={{
                  width: { xs: "25px", md: "35px" },
                  height: { xs: "25px", md: "35px" },
                  color: "white",
                  "&:hover": {
                    color: "darkcyan",
                  },
                }}
              />
            </IconButton>
          </Stack>
        );
      })}
    </Box>
  );
}
