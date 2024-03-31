import "./App.css";
import { Stack, Container } from "@mui/material";
import Home from "./components/Home";
import Trend from "./components/Trend";
import Features from "./components/Features";
import Action from "./components/Action";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <Stack sx={{ fontFamily: "Raleway, sans-serif" }}>
          <Home />
          <Trend />
          <Features />
          <Action />
          <Footer />
        </Stack>
      </Container>
    </>
  );
}

export default App;
