import { Box, IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CollectionsTwoToneIcon from "@mui/icons-material/CollectionsTwoTone";
import { iconVariants, parentVariants } from "./styles";
import { useNavigate } from "react-router-dom";
import "./style.css";

const links = [
  {
    title: "Home",
    link: "/",
    IconMenu: ({ ...rest }) => <HomeTwoToneIcon {...rest} />,
  },
  {
    title: "Heart",
    IconMenu: ({ ...rest }) => <FavoriteTwoToneIcon {...rest} />,
  },
  {
    title: "Calender",
    link: "/calendar",
    IconMenu: ({ ...rest }) => <CalendarMonthTwoToneIcon {...rest} />,
  },
  {
    title: "Location",
    link: "/seats",
    IconMenu: ({ ...rest }) => <SearchOutlinedIcon {...rest} />,
  },
  {
    title: "Gallery",
    link: "/gallery",
    IconMenu: ({ ...rest }) => <CollectionsTwoToneIcon {...rest} />,
  },
];

export default function MainMenu() {
  const navigate = useNavigate();

  const _menuIconOnClick = (link) => {
    navigate(link);
  };

  return (
    <Box
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      animate="open"
      exit="exit"
      boxShadow={10}
      sx={{
        display: "flex",
        position: "fixed",
        borderRadius: 2,
        zIndex: 1000,
        bottom: { md: 20, xs: 15 },
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "white",
        p: 1,
      }}
    >
      {links.map(({ title, IconMenu, link }, key) => (
        <Tooltip key={key} title={title}>
          <IconButton
            component={motion.button}
            variants={iconVariants}
            onClick={() => _menuIconOnClick(link)}
            sx={{
              mr: 2,
              "&:last-child": {
                mr: 0,
              },
            }}
          >
            <IconMenu className="MainMenu__IconMenu" />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
}
