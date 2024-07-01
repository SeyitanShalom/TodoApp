import { Stack, Box, TextField, Button } from "@mui/material";
import TodoItem from "./TodoItem";
export default function Form({ todo, todos, setTodo, setTodos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };
  const handleChange = (e) => {
    setTodo({ name: e.target.value, done: false });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} direction="row">
          <TextField
            variant="standard"
            type="text"
            label="Input Todo Item..."
            size="small"
            onChange={handleChange}
            value={todo.name}
            sx={{
              width: { xs: "300px", sm: "400px", md: "500px" },
              "& .MuiInput-root": {
                color: "#000",
                fontFamily: "nunito",
                fontWeight: "bold",
                // Bottom border
                "&:before": {
                  borderColor: "#black",
                  borderWidth: "2px",
                },
                // Border on focus
                "&:after": {
                  borderColor: "darkcyan",
                  borderWidth: "3px",
                  padding: "10px",
                },
                ":hover:not(.Mui-focused)": {
                  "&:before": {
                    borderColor: "#e7e7e7",
                    borderWidth: "2px",
                  },
                },
              },
              // Label
              "& .MuiInputLabel-standard": {
                color: "#black",
                fontWeight: "bold",
                fontSize: "13px",
                "&.Mui-focused": {
                  color: "darkcyan",
                },
              },
            }}
          />
          <Button
            type="submit"
            size="small"
            sx={{
              backgroundColor: "darkcyan",
              color: "white",
              fontSize: "15px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "white",
                color: "darkcyan",
                boxShadow: "0 2px 4px rgb(0, 0, 0, 0.2)",
              },
            }}
          >
            Add
          </Button>
        </Stack>
      </form>
      {console.log({ todos })}
      <TodoItem todos={todos} setTodos={setTodos} todo={todo} />
    </Box>
  );
}
