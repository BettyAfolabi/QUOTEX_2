import { Stack, Box, Typography, Grid, Button, Paper } from "@mui/material";
import { East } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)({
  backgroundColor: "transparent",
  backgroundOpacity: "75%",
  border: "1px #FFFFFF0D solid",
  padding: "1rem",
  borderRadius: "18px",
  position: "relative",
  color: "#fff",
  height: "150px",
  marginBottom: "3rem",
});
const StyledTitle = styled(Typography)({
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "30px",
  textAlign: "left",
});
const StyledCaption = styled(Typography)({
  fontFamily: "Roboto, sans-serif",
  fontSize: "14px",
  fontWeight: "400",
  textAlign: "left",
  color: "#B6B6B6",
});
const StyledButton = styled(Button)({
  position: "absolute",
  bottom: "9px",
  left: "1.5rem",
});
function Features() {
  return (
    <>
      <Box my={10} color="#fff" width="100%">
        <Stack>
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "44px",
              textAlign: "center",
            }}
          >
            Quotex Amazing Features
          </Typography>
          <Typography
            py={3}
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28.8px",
              margin: "auto",
            }}
          >
            Explore sensational features to prepare your best investment in
            cryptocurrency
          </Typography>
        </Stack>

        <Grid
          container
          my={4}
          columnGap={3}
          mb={10}
          justifyContent="center"
          sx={{ rowGap: "4rem" }}
        >
          <Grid
            item
            width="270px"
            height="170px"
            sx={{
              "@media (max-width: 768px)": {
                width: "400px",
                height: "200px",
                fontSize: "20px",
              },
            }}
          >
            <StyledPaper elevation={6}>
              <Box>
                <StyledTitle>Request for Quote (RFQ)</StyledTitle>
                <StyledCaption pt={2}>
                  Request for Quote (RFQ) mechanism for optimised price
                  discovery.
                </StyledCaption>

                <StyledButton
                  color="primary"
                  size="small"
                  endIcon={<East />}
                  href="#"
                >
                  Read More
                </StyledButton>
              </Box>
            </StyledPaper>
          </Grid>

          {/* Second card */}
          <Grid
            item
            width="270px"
            height="170px"
            sx={{
              "@media (max-width: 768px)": {
                width: "400px",
                height: "200px",
                fontSize: "20px",
              },
            }}
          >
            <StyledPaper elevation={6}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <StyledTitle>Seamless Onboarding</StyledTitle>
                  <StyledCaption variant="body2" pt={2}>
                    Seamless onboarding using NFID
                  </StyledCaption>
                </Box>
                <StyledButton
                  color="primary"
                  size="small"
                  endIcon={<East />}
                  href="#"
                >
                  Read More
                </StyledButton>
              </Stack>
            </StyledPaper>
          </Grid>

          {/* Third Card */}
          <Grid
            item
            width="270px"
            height="170px"
            sx={{
              "@media (max-width: 768px)": {
                width: "400px",
                height: "200px",
                fontSize: "20px",
              },
            }}
          >
            <StyledPaper elevation={6}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <StyledTitle>Open Market System</StyledTitle>
                  <StyledCaption pt={2}>
                    Open market system for optimised trading experience
                  </StyledCaption>
                </Box>
                <StyledButton
                  color="primary"
                  size="small"
                  endIcon={<East />}
                  href="#"
                >
                  Read More
                </StyledButton>
              </Stack>
            </StyledPaper>
          </Grid>

          {/* Fourth card */}
          <Grid
            item
            width="270px"
            height="170px"
            sx={{
              "@media (max-width: 768px)": {
                width: "400px",
                height: "200px",
                fontSize: "20px",
              },
            }}
          >
            <StyledPaper elevation={6}>
              <Box>
                <StyledTitle>Open Debt system</StyledTitle>
                <StyledCaption pt={2}>
                  We utilise a free and transparent approach for leverage
                  trading where agreements is solely controlled by the lender.
                </StyledCaption>

                <StyledButton
                  color="primary"
                  size="small"
                  endIcon={<East />}
                  href="#"
                >
                  Read More
                </StyledButton>
              </Box>
            </StyledPaper>
          </Grid>
        </Grid>

        {/* aunthetication */}
        <Stack>
          <Stack my={3} mt={10}>
            <Stack direction="row" justifyContent="center">
              <img src="nfid.png" alt="nfid logo" />

              <Typography
                sx={{
                  color: "#ECF1F0",
                  fontSize: "36px",
                  fontWeight: "700",
                  lineHeight: "40px",
                  alignSelf: "center",
                }}
              >
                NFiD authentication
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: "#B6B6B6",
                fontFamily: "Inter, sans-serif",
                textAlign: "center",
                fontSize: "16px",
                paddingY: "12px",
              }}
            >
              Explore NFID technology to enjoy the best a 3d experience
            </Typography>
          </Stack>
          <Stack
            sx={{
              border: "1px #FFFFFF0D solid",
              backgroundColor: "transparent",
              backgroundOpacity: "75%",
              borderRadius: "18px",
              marginY: "2rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Typography
              p={5}
              sx={{
                color: "#B6B6B6",
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "38px",
              }}
            >
              Embrace the new era of personal empowerment with NFID, the most
              advanced digital identity to keep your personal information
              private and digital assets secure. NFID isn't just an identity;
              it's a powerful tool for managing digital assets. Equipped with an
              integrated crypto wallet, NFID empowers you to seamlessly manage
              BTC, ETH, MATIC, ICP, collectibles, and more under the protection
              of the most advanced smart contract platform to date .Powered by
              state-of-the-art passkey & chainkey technology, your NFID offers
              unprecedented security, insulating you from the vulnerabilities
              that threaten even the most fortified digital platforms. Your NFID
              is exclusively yours, accessible and usable by no one else.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default Features;
