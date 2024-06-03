import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import appStore from "../../../assets/images/appstore.png";
import playStore from "../../../assets/images/playstore.png";
import Cart from "../../../component/Cart";
import Footer from "../../../Footer/Footer";
import { Box, Container, Typography, Grid } from "@mui/material";
import Navbar from "../../../Navber/Navbar";
import SideNavebar from "../../../Navber/SideNavebar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabBox = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const textColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--text-color"
  );

  const bgColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--bg-color"
  );

  return (
    <Container sx={{ my: 5, maxWidth: "1050px" }} maxWidth="1050px">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="basic tabs example"
          >
            <Tab label="Most Recent" {...a11yProps(0)} />
            <Tab label="Saved Jobs" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {/* Cart content */}
          <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>
              {Array.from({ length: 9 }).map((_, index) => (
                <Grid item xs={12} key={index}>
                  <Link to="/mobile">
                    <Cart />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {/* Cart content */}
          <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>
              {Array.from({ length: 2 }).map((_, index) => (
                <Grid item xs={12} key={index}>
                  <Link to="/mobile">
                    <Cart />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </CustomTabPanel>
      </Box>
    </Container>
  );
};

export default TabBox;
