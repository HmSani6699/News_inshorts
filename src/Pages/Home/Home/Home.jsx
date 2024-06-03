import React from "react";
import appStore from "../../../assets/images/appstore.png";
import playStore from "../../../assets/images/playstore.png";
import Cart from "../../../component/Cart";
import Footer from "../../../Footer/Footer";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Navbar from "../../../Navber/Navbar";
import SideNavebar from "../../../Navber/SideNavebar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import TabBox from "../TabBox/TabBox";

const Home = () => {
  const { t } = useTranslation();
  const textColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--text-color"
  );
  const allCart = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Navbar toggleDrawer={toggleDrawer} />
      <SideNavebar toggleDrawer={toggleDrawer} open={open} />
      {/* Home app and play store content */}
      {/* <Box pt={14}>
        <Container
          sx={{
            bgcolor: "#f44336",
            color: "white",
            minHeight: 60,
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            py: { xs: 2, lg: 0 },
          }}
          maxWidth="md"
        >
          <Typography
            variant="body2"
            align="center"
            sx={{ mb: { xs: 2, lg: 0 } }}
          >
            {t("app_title")}
          </Typography>
          <Box
            display="flex"
            justifyContent={{ xs: "center", lg: "flex-start" }}
            gap={2}
          >
            <img className="h-[40px]" src={appStore} alt="App Store" />
            <img className="h-[40px]" src={playStore} alt="Play Store" />
          </Box>
        </Container>
      </Box> */}

      <Box pt={10}>
        <TabBox />
      </Box>

      {/* Cart content */}
      {/* <Container sx={{ my: 5 }} maxWidth="md">
        <Grid container spacing={2}>
          {allCart.map((item) => (
            <Grid item xs={12} key={item}>
              <Link to="/mobile">
                <Cart />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container> */}

      <Box display="flex" justifyContent="center" my={6}>
        <Button
          variant="outlined"
          sx={{
            py: 1,
            px: 5,
            borderColor: "gray",
            color: `secondary`,
            outline: "none",
          }}
        >
          Load More
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
