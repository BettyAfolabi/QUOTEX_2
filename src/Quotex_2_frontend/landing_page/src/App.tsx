import "./App.css";
import { Stack } from "@mui/material";
import Home from "./components/Home";
import Trend from "./components/Trend";
import Features from "./components/Features";
import Action from "./components/Action";
import Footer from "./components/Footer";

function App() {
  return (
    <Stack
      sx={{
        backgroundImage: "url('/Homebg.png')",
        backgroundSize: "center",
      }}
    >
      <Stack
        sx={{
          fontFamily: "Raleway, sans-serif",
          marginX: "1.5rem",
        }}
      >
        <Home />
        <Stack sx={{ backgroundImage: "url('/Topographic.png')" }}>
          <Trend />
          <Features />
          <Action />
          <Footer />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
