import { Box } from "@mui/material";
export default function Header() {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 139, 139, .3), darkcyan,darkcyan, darkcyan, rgba(0, 139, 139, .3))",
          textAlign: "center",
          padding: "15px",
          fontSize: "2.5rem",
          color: "beige",
          boxShadow: "0 4px 6px rgb(0, 0, 0, 0.2)",
          // fontFamily: "nunito",
          fontWeight: "900",
          marginBottom: "50px",
        }}
      >
        My Todo List
      </Box>
    </>
  );
}
