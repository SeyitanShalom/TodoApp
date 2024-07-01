import { Stack, Box } from "@mui/material";
export default function Header() {
  return (
    <>
      <Box
        sx={{
          margin: "0",
          padding: "0",
          width: "100%",
          height: "100px",
          fontFamily: "nunito",
          fontWeight: "900",
        }}
      >
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(to right, whitesmoke, rgb(0, 139, 139), whitesmoke)",
            textAlign: "center",
            padding: "25px",
            fontSize: "2.5rem",
            color: "beige",
            boxShadow: "0 4px 6px rgb(0, 0, 0, 0.2)",
          }}
        >
          My Todo List
        </Box>
      </Box>
    </>
  );
}
