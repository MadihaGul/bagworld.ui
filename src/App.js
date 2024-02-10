import { Button, Container, ThemeProvider } from "@mui/material";
import "./App.css";
import { useEffect } from "react";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "MUI Test";
  });
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Button variant="contained">Test 1</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
