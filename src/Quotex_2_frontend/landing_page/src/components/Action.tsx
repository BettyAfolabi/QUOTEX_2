import { Box, Button, Stack, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
  marginBottom: "1rem",
  width: "400px",
  height: "70px",
  backgroundColor: "transparent",
  color: "#fff",
  blackgrounOpacity: "90%",
  border: "1px #FFFFFF0D solid",
  borderRadius: "18px",
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
              style={{
                width: "50px",
                height: "50px",
                color: "#FFFFFF05",
                marginTop: "10px",
              }}
            />
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "18px" }}>
                Create Your Account
              </Typography>
              <Typography sx={{ color: "#B6B6B6", fontSize: "14px" }}>
                Your account and personal identity are guaranteed safe.
              </Typography>
            </Stack>
          </StyledPaper>
          <StyledPaper
            elevation={4}
            sx={{
              marginLeft: "2rem",
              marginY: "20px",
              "@media (max-width: 768px)": {
                marginLeft: "0",
              },
            }}
          >
            <img
              src="walleticon.png"
              alt="Wallet's icon"
              style={{
                width: "50px",
                height: "50px",
                color: "#FFFFFF05",
                marginTop: "10px",
              }}
            />
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingY: "10px",
              }}
            >
              <Typography sx={{ fontSize: "18px" }}>
                Fund Your wallet
              </Typography>
              <Typography sx={{ color: "#B6B6B6", fontSize: "14px" }}>
                Fund your wallet to start transactions.
              </Typography>
            </Stack>
          </StyledPaper>
          <StyledPaper
            elevation={4}
            sx={{
              marginLeft: "4rem",
              "@media (max-width: 768px)": {
                marginLeft: "0",
              },
            }}
          >
            <img
              src="portfolioicon.png"
              alt="Portfolio's icon"
              style={{
                width: "50px",
                height: "50px",
                color: "#FFFFFF05",
                marginTop: "10px",
              }}
            />
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ fontSize: "18px" }}>
                Start Building Your Portfolio
              </Typography>
              <Typography sx={{ color: "#B6B6B6", fontSize: "14px" }}>
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
