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
          fontSize: "24px",
          marginRight: "2rem",
          marginTop: "1rem",
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
          sx={{
            textTransform: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Database
        </Button>
        <Button
          variant="text"
          href="#"
          color="inherit"
          sx={{
            textTransform: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Protocol
        </Button>
        <Button
          variant="text"
          href="#"
          color="inherit"
          sx={{
            textTransform: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Stat
        </Button>
        <Button
          variant="text"
          href="#"
          color="inherit"
          sx={{
            textTransform: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Community
        </Button>
        <Button
          variant="text"
          href="#"
          color="inherit"
          sx={{
            textTransform: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Help
        </Button>
        <Stack direction="row" justifyContent="center">
          <Box
            aria-label="logo"
            sx={{
              paddingTop: "5px",
              paddingRight: "12px",
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
            marginTop: "20px",
            paddingY: "9px",
            paddingX: "20px",
            borderRadius: "12px",
          }}
        >
          Launch
        </Button>
      </Stack>
    </>
  );
}

export default NavData;
