import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>

      <Button variant="contained" color="error" href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '300px', textAlign: 'center', background: '#FF2625', padding: '8px', fontSize: '20px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>
        Explor Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        marginTop={-5}
        marginLeft={10}
        sx={{
          opacity: "0.1",
          display: { lg: "block",  },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>

      {/* <img src={HeroBannerImage} alt="banner" className="hero-banner-img" /> */}
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        height={300}
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
