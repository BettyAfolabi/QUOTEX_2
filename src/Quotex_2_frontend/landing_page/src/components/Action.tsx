import { Box, Button, Stack, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
  marginBottom: "1rem",
  width: "400px",
  backgroundColor: "transparent",
  color: "#fff",
  blackgrounOpacity: "90%",
  border: "1px #FFFFFF0D solid",
  textAlign: "start",
  padding: "10px",
});

function Action() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginY: "7rem",
          width: "100%",
          "@media (max-width: 800px)": {
            flexDirection: "column",
            alignItems: "center",
            gap: "3rem",
            marginY: "3rem",
          },
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "44px",
              textAlign: "left",
              color: "#ECF1F0",
            }}
          >
            How To Get Started
          </Typography>
          <Typography
            variantMapping={{ body2: "span" }}
            variant="body2"
            sx={{
              fontFamily: "Roboto",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28.8px",
              textAlign: "left",
              color: "#B6B6B6",
              paddingY: "20px",
            }}
          >
            Simple and easy way to start your trading with Quotex.
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              borderRadius: "10px",
              padding: "13px 24px",
              backgroundColor: "#97C1FE",
              width: "160px",
              fontWeight: "600px",
              fontSize: "16px",
            }}
          >
            Get Started
          </Button>
        </Stack>
        <Stack>
          <StyledPaper elevation={4}>
            <img
              src="usericon.png"
              alt="user's icon"
              style={{ width: "80px", height: "80px", color: "#FFFFFF05" }}
            />
            <Stack>
              <Typography>Create Your Account</Typography>
              <Typography sx={{ color: "#B6B6B6", fontSize: "16px" }}>
                Your account and personal identity are guaranteed safe.
              </Typography>
            </Stack>
          </StyledPaper>
          <StyledPaper
            elevation={4}
            sx={{ marginLeft: "2rem", marginY: "20px" }}
          >
            <img src="walleticon.png" alt="Wallet's icon" />
            <Stack>
              <Typography>Fund Your wallet</Typography>
              <Typography>Fund your wallet to start transactions.</Typography>
            </Stack>
          </StyledPaper>
          <StyledPaper elevation={4} sx={{ marginLeft: "4rem" }}>
            <img src="portfolioicon.png" alt="Portfolio's icon" />
            <Stack>
              <Typography>Start Building Your Portfolio</Typography>
              <Typography>
                Buy and sell popular currencies and keep track of them.
              </Typography>
            </Stack>
          </StyledPaper>
        </Stack>
      </Box>
    </>
  );
}

export default Action;
