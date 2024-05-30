// import React from "react";
// import Navber from "../../../Navber/Navber";
// import appStore from "../../../assets/images/appstore.png";
// import playStore from "../../../assets/images/playstore.png";
// import Cart from "../../../component/Cart";
// import Footer from "../../../Footer/Footer";

// const Home = () => {
//   const allCart = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   return (
//     <div>
//       <Navber />
//       {/* Home app and play sotr  content */}
//       <div className="pt-[110px]">
//         <div className="bg-[#f44336] text-white min-h-[60px] lg:flex items-center justify-between lg:px-[35px] py-[20px] lg:py-[0px] max-w-[965px] mx-auto">
//           <p className="text-center text-[14px]">
//             For the best experience use{" "}
//             <span className="font-semibold">Inshorts</span> app on your
//             smartphone
//           </p>
//           <div className="flex justify-center lg:justify-start lg:mt-[0px] mt-[15px] gap-[20px]">
//             <img className="h-[40px]" src={appStore} alt="" />
//             <img className="h-[40px]" src={playStore} alt="" />
//           </div>
//         </div>
//       </div>

//       {/* Cart content */}
//       <div className="my-[40px] max-w-[890px] mx-auto">
//         {allCart?.map((item) => (
//           <Cart />
//         ))}
//       </div>

//       <div className=" flex justify-center my-[50px]">
//         <button className=" shadow-xl border py-[3px] px-[30px] text-[16px]">
//           Lead More
//         </button>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React from "react";
import appStore from "../../../assets/images/appstore.png";
import playStore from "../../../assets/images/playstore.png";
import Cart from "../../../component/Cart";
import Footer from "../../../Footer/Footer";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Navbar from "../../../Navber/Navbar";
import SideNavebar from "../../../Navber/SideNavebar";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
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
      <Box pt={14}>
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
      </Box>

      {/* Cart content */}
      <Container sx={{ my: 5 }} maxWidth="md">
        <Grid container spacing={2}>
          {allCart.map((item) => (
            <Grid item xs={12} key={item}>
              <Cart />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box display="flex" justifyContent="center" my={6}>
        <Button variant="outlined" sx={{ py: 1, px: 5 }}>
          Load More
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
