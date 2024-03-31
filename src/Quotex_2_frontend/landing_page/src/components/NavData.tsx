import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Stack, Box } from "@mui/material";
import { useState } from "react";

function NavData() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <Stack
        spacing={2}
        sx={{
          fontSize: "12px",
          marginRight: "2rem",
          display: "flex",
          flexDirection: "row",
          "@media (max-width: 768px)": {
            flexDirection: "column",
          },
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
    </>
  );
}

export default NavData;
