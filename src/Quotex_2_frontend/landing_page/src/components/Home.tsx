import NavData from "./NavData";
import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import { KeyboardArrowDown, Menu } from "@mui/icons-material";
import { useState } from "react";

function Home() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <Box
        sx={{
          fontFamily: "Raleway, sans-serif",
          color: "#fff",
          textAlign: "center",
          width: "100%",
          backgroundImage: "url('Rectangle 55.png')",
        }}
      >
        {/* Begining of Navigation */}
        <AppBar
          position="static"
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            marginBottom: "5rem",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "nowrap",
            }}
            disableGutters
          >
            <Stack>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Libre Bodoni, serif", fontSize: "24px" }}
              >
                <span style={{ fontSize: "36px" }}>Q</span>
                uotex
              </Typography>
            </Stack>
            <Stack
              sx={{
                "@media (max-width: 768px)": {
                  display: "block",
                },
                "@media (min-width: 769px)": {
                  display: "none",
                },
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
                onClick={() => setIsDrawerOpen(true)}
              >
                <Menu />
              </IconButton>
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <Box p={2} width="250px" textAlign="center" role="presentation">
                  <NavData />
                </Box>
              </Drawer>
            </Stack>

            {/* larger screen navigation */}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                "@media (max-width: 768px)": {
                  display: "none",
                },
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  fontSize: "12px",
                  marginRight: "2rem",
                }}
              >
                <Button
                  variant="text"
                  href="#"
                  color="inherit"
                  sx={{ textTransform: "none" }}
                >
                  Database
                </Button>
                <Button
                  variant="text"
                  href="#"
                  color="inherit"
                  sx={{ textTransform: "none" }}
                >
                  Protocol
                </Button>
                <Button
                  variant="text"
                  href="#"
                  color="inherit"
                  sx={{ textTransform: "none" }}
                >
                  Stat
                </Button>
                <Button
                  variant="text"
                  href="#"
                  color="inherit"
                  sx={{ textTransform: "none" }}
                >
                  Community
                </Button>
                <Button
                  variant="text"
                  href="#"
                  color="inherit"
                  sx={{ textTransform: "none" }}
                >
                  Help
                </Button>
                <Stack direction="row" spacing={0}>
                  <Box
                    aria-label="logo"
                    sx={{
                      paddingTop: "5px",
                      paddingRight: "6px",
                      width: "10px",
                      height: "10px",
                    }}
                  >
                    <img src="globe.png" alt="globe" />
                  </Box>
                  <Button
                    color="inherit"
                    id="en-button"
                    onClick={handleClick}
                    aria-control={open ? "en-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    endIcon={<KeyboardArrowDown />}
                    variant="text"
                    sx={{ textTransform: "none" }}
                  >
                    EN
                  </Button>
                </Stack>
              </Stack>

              <Stack>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#0300AB",
                    paddingY: "9px",
                    paddingX: "20px",
                  }}
                >
                  Launch
                </Button>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
        {/* End of Navigation */}

        <Stack
          my={20}
          sx={{
            backgroundImage: "url('Home.png')",
            backgroundSize: "cover",
          }}
        >
          <Typography
            sx={{
              fontSize: "60px",
              fontWeight: "700",
              lineHeight: "75.14px",
              textAlign: "center",
            }}
          >
            Trade perpetual seamlessly
          </Typography>
          <Typography
            variantMapping={{ body2: "span" }}
            variant="body2"
            py={3}
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "40px",
              margin: "auto",
              textAlign: "center",
            }}
          >
            Quotex is a decentralised perpetual trading platform that utilises
            the request for quote pricing model to execute trades that are
            totally MEV resistant and with minimal to zero spillage.
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#0300AB",
              paddingY: "11px",
              paddingX: "20px",
              margin: "auto",
              width: "160px",
            }}
          >
            Launch
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Home;
