import { Box, Stack, Typography, Divider } from "@mui/material";
import { Instagram, Twitter, FacebookRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const FooterList = styled(Stack)({
  paddingX: "2rem",
  textAlign: "start",
});
const FooterTitle = styled(Typography)({
  color: "#ECF1F0",
  paddingBottom: "12px",
  fontWeight: "bold",
  fontSize: "13px",
});
const FooterContent = styled(Typography)({
  color: "#B6B6B6",
  paddingBottom: "12px",
  fontWeight: "normal",
  fontSize: "12px",
});

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginY: "2rem",
          fontFamily: "Roboto, sans-serif",
          width: "100%",
          "@media (max-width: 768px)": {
            flexDirection: "column-reverse",
          },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "self-start",
            flexBasis: "50%",
            "@media (max-width: 768px)": {
              marginY: "2rem",
              marginLeft: "1.5rem",
            },
          }}
        >
          <Typography variant="h6" color="#FFFFFF">
            <span style={{ fontFamily: "Libre Bodoni, serif" }}>Q</span>
            uotex
          </Typography>
          <Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                color: "#B6B6B6",
                paddingY: "2rem",
                width: "20px",
                height: "20px",
              }}
            >
              <Instagram />
              <FacebookRounded />
              <Twitter />
            </Stack>
            <Typography sx={{ color: "#B6B6B6", fontSize: "16px" }}>
              {`© ${year} Quotex. All rights reserved.`}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "20px",
            paddingLeft: "30px",
            flexBasis: "50%",
          }}
        >
          <FooterList>
            <FooterTitle>About Us</FooterTitle>
            <FooterContent>About</FooterContent>
            <FooterContent>Careers</FooterContent>
            <FooterContent>Blog</FooterContent>
            <FooterContent>Legal & privacy</FooterContent>
          </FooterList>
          <FooterList>
            <FooterTitle>Services</FooterTitle>
            <FooterContent>Applications</FooterContent>
            <FooterContent>Buy Crypto</FooterContent>
            <FooterContent>Institutional Services</FooterContent>
          </FooterList>
          <FooterList>
            <FooterTitle>Learn</FooterTitle>
            <FooterContent>What is DeFi?</FooterContent>
            <FooterContent>Crypto Basic</FooterContent>
            <FooterContent>Tips and Tutorials</FooterContent>
            <FooterContent>Market Update</FooterContent>
          </FooterList>
        </Stack>
      </Box>
    </>
  );
}

export default Footer;
