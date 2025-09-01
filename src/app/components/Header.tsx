"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Paper,
  Stack,
  styled,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { footerHeight } from "@/lib/config";

const Header: React.FC = () => {

  const theme = useTheme();

  // Create a reusable styled button
const StyledButton = styled(Button)(({ theme }) => ({
  cursor: "pointer",
  color: theme.customColors.headerFontColor,
  fontWeight: "normal",
  textTransform: "none", // keep original text casing
  padding: 0, // remove default padding
  minWidth: 0, // optional: shrink width
}));

  return (
<AppBar
  position="fixed"
  sx={{
    backgroundColor: "#ffffff",
    boxShadow: 3,
    px: 2,
    width: "100%",
    height: footerHeight,
  }}
>
      <Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: "unset"}}>
        {/* Left: Logo */}
        <Stack direction="row" spacing={2} alignItems="center">
        <Box style={{ position: "relative", width: 75, height: 30 }}>
                          <Image
                            src="/google-logo.svg"
                            alt="Google Logo"
                            fill
                            style={{ objectFit: "contain" }} // preserve aspect ratio
                          />
        </Box>
        <StyledButton>
          <Typography variant="h6" sx={{fontWeight: "light", mr: 4}}>The Keyword</Typography>
        </StyledButton>

        {/* Center: Navigation */}
        <Box sx={{ display: "flex", gap: 2, }}>
          <StyledButton>
            <Typography variant="caption">Home</Typography>
          </StyledButton>
          <StyledButton>
            <Typography variant="caption">Product news</Typography>
          </StyledButton>
          <StyledButton>
            <Typography variant="caption">Company news</Typography>
          </StyledButton>
          <StyledButton>
            <Typography variant="caption">Feed</Typography>
          </StyledButton>
        </Box>
        </Stack>

        {/* Right: Search, Language, Subscribe */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <StyledButton><SearchIcon fontSize="small"/></StyledButton>
          <StyledButton><LanguageIcon fontSize="small"/></StyledButton>
          <StyledButton><MoreVertIcon fontSize="small"/></StyledButton>
          <Button variant="contained" color="primary" disableElevation>
            <Typography variant='caption'>Subscribe</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
