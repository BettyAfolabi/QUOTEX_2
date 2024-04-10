import { Stack, Grid, Typography, Divider, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)({
  backgroundColor: "transparent",
  backgroundOpacity: "75%",
  border: "1px #FFFFFF0D solid",
  padding: "1rem",
  borderRadius: "18px",
  color: "#fff",
  height: "150px",
  "@media (max-width: 768px)": {
    height: "200px",
    fontSize: "20px",
  },
});

const StyledLogo = styled(Typography)({
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "21.13px",
  paddingX: "5px",
  marginY: "20px",
});
const StyledName = styled(Typography)({
  backgroundColor: "#C6C6C6",
  color: "#1D1429",
  height: "16px",
  marginY: "10px",
  fontSize: "11px",
  padding: "4px",
});
const RowStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

function Trend() {
  return (
    <>
      <Stack
        sx={{
          fontFamily: "Raleway, sans-serif",
          color: "#fff",
          marginY: "2rem",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#ECF1F0",
            fontSize: "28px",
            textAlign: "left",
            fontWeight: "600",
            lineHeight: "32px",
          }}
        >
          Market Trend
        </Typography>

        {/* Cards */}

        <Grid
          container
          my={4}
          columnGap={3}
          justifyContent="center"
          sx={{ rowGap: "4rem" }}
        >
          {/* First card */}
          <Grid
            item
            width="270px"
            sx={{
              "@media (max-width: 768px)": {
                width: "370px",
              },
            }}
          >
            <StyledPaper elevation={6}>
              <RowStack mb={2}>
                <Stack direction="row">
                  <img
                    src="coin-icon1.png"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <StyledLogo mt={1} px={1}>
                    BTC
                  </StyledLogo>
                  <StyledName mt={1}>BITCOIN</StyledName>
                </Stack>
                <img
                  src="see-more.png"
                  style={{ width: "50px", height: "50px" }}
                />
              </RowStack>

              <Divider color="#C6C6C6" />
              <RowStack mt={2}>
                <Stack direction="column">
                  <Typography>$66,536.41</Typography>
                  <Typography>0.47%</Typography>
                </Stack>
                <img src="coin-chart1.png" />
              </RowStack>
            </StyledPaper>
          </Grid>
          {/* Second card */}
          <Grid
            item
            width="270px"
            sx={{
              "@media (max-width: 768px)": {
                width: "370px",
              },
            }}
          >
            <StyledPaper elevation={6}>
              <RowStack mb={2}>
                <Stack direction="row">
                  <img
                    src="coin-icon2.png"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <StyledLogo mt={1} px={1}>
                    ETH
                  </StyledLogo>
                  <StyledName mt={1}>ETHEREUM</StyledName>
                </Stack>
                <img
                  src="see-more.png"
                  style={{ width: "50px", height: "50px" }}
                />
              </RowStack>
              <Divider color="#C6C6C6" />
              <RowStack mt={2}>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>$3,497.78</Typography>
                  <Typography>1.82%</Typography>
                </Stack>
                <img src="coin-chart2.png" />
              </RowStack>
            </StyledPaper>
          </Grid>

          {/* Third card */}
          <Grid
            item
            width="270px"
            sx={{
              "@media (max-width: 768px)": {
                width: "370px",
              },
            }}
          >
            <StyledPaper elevation={6}>
              <RowStack mb={2}>
                <Stack direction="row">
                  <img
                    src="coin-icon3.png"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <StyledLogo mt={1} px={1}>
                    BNB
                  </StyledLogo>
                  <StyledName mt={1}>BINANCE</StyledName>
                </Stack>
                <img
                  src="see-more.png"
                  style={{ width: "50px", height: "50px" }}
                />
              </RowStack>
              <Divider color="#C6C6C6" />
              <RowStack mt={2}>
                <Stack direction="column">
                  <Typography>$647.45</Typography>
                  <Typography>1.23%</Typography>
                </Stack>
                <img src="coin-chart3.png" />
              </RowStack>
            </StyledPaper>
          </Grid>

          {/* Fourth Card */}

          <Grid
            item
            width="270px"
            sx={{
              "@media (max-width: 768px)": {
                width: "370px",
              },
            }}
          >
            <StyledPaper elevation={6}>
              <RowStack mb={2}>
                <Stack direction="row">
                  <img
                    src="coin-icon4.png"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <StyledLogo mt={1} px={1}>
                    USDT
                  </StyledLogo>
                  <StyledName mt={1}>TETHER</StyledName>
                </Stack>
                <img
                  src="see-more.png"
                  style={{ width: "50px", height: "50px" }}
                />
              </RowStack>
              <Divider color="#C6C6C6" />
              <RowStack mt={2}>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>$2.456</Typography>
                  <Typography>1.21%</Typography>
                </Stack>
                <img src="coin-chart4.png" />
              </RowStack>
            </StyledPaper>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default Trend;
