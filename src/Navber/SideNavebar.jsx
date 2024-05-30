import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { ButtonGroup } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

const SideNavbar = ({ toggleDrawer, open }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;
  console.log("Current Language:", currentLanguage);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box display="flex" justifyContent="flex-end">
        <CloseIcon
          sx={{ color: "black", paddingTop: "10px", fontSize: "35px" }}
        />
      </Box>
      <Box
        display="flex"
        pt={3}
        pb={3}
        justifyContent="center"
        alignItems="center"
      >
        <ButtonGroup
          sx={{
            borderColor: "gray",
            "& .MuiButtonGroup-grouped": {
              borderColor: "gray",
            },
          }}
          aria-label="Medium-sized button group"
        >
          <Button
            onClick={() => changeLanguage("en")}
            sx={{
              color: "black",
              bgcolor: `${currentLanguage === "en" && "#808080b3"}`,
            }}
          >
            English
          </Button>
          <Button
            onClick={() => changeLanguage("bn")}
            sx={{
              color: "black",
              bgcolor: `${currentLanguage === "bn" && "#808080b3"}`,
            }}
          >
            বাংলা
          </Button>
        </ButtonGroup>
      </Box>
      <Divider />
      <Box sx={{ paddingTop: "20px" }}>
        <List>
          <ListItem>
            <ListItemButton>
              <p>{t(`sidebar.liat_1`)}</p>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <p>{t(`sidebar.liat_2`)}</p>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <p>{t(`sidebar.liat_3`)}</p>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <p>{t(`sidebar.liat_4`)}</p>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <p>{t(`sidebar.liat_5`)}</p>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <p>{t(`sidebar.liat_6`)}</p>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <p>{t(`sidebar.liat_7`)}</p>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <p>{t(`sidebar.liat_8`)}</p>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <div className="mt-[100px]">
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideNavbar;
