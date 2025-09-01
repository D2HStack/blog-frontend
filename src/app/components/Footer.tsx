import { Box, Container, Divider, Typography, Stack, IconButton, Grid, Link as MuiLink } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import { Instagram, Twitter,YouTube, Facebook, LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import NextLink from "next/link";

import DropdownMenu from "./DropdownMenu";
import { languageMenu, footerHeight } from "@/lib/config";

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: "background.paper", borderColor: "divider", py: 2 }}>
      <Container maxWidth="lg">
        <Stack direction="column" spacing={2}>
          
          {/* First row: Follow Us */}
          <Stack direction="row" spacing={0} alignItems="center" sx={{ height: footerHeight }}>
            <Typography variant="caption" sx={{ mr: 6 }}>Follow Us</Typography>
            <Stack direction="row" spacing={1} sx={{ ml: 2 }}>
              {/* <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank"  > <Typography variant="iconMedium"><Instagram fontSize="inherit"/></Typography></IconButton> */}
              <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank"  ><Instagram fontSize="small"/></IconButton>
              <IconButton aria-label="Twitter" href="https://twitter.com" target="_blank"><Twitter fontSize="small" /></IconButton>
              <IconButton aria-label="YouTube" href="https://youtube.com" target="_blank"><YouTube fontSize="small" /></IconButton>
              <IconButton aria-label="Facebook" href="https://facebook.com" target="_blank"><Facebook fontSize="small" /></IconButton>
              <IconButton aria-label="LinkedIn" href="https://linkedin.com" target="_blank"><LinkedIn fontSize="small" /></IconButton>
            </Stack>
          </Stack>

          <Divider />

          {/* Second row: logo+links left, Help + language selector right */}
          <Grid container alignItems="center" height={footerHeight}>
            {/* Logo + links left */}
            <Grid size={8}>
              <Box sx={{ display: "flex", alignItems: "center", }}>          
                <Box style={{ position: "relative", width: 75, height: 30 }}>
                  <Image
                    src="/colorless-google-logo.svg"
                    alt="Google Logo"
                    fill
                    style={{ objectFit: "contain" }} // preserve aspect ratio
                  />
                </Box>
                <Box sx={{ ml: 'calc(2 * 18px + 8px)', display: "flex", flexGrow: 1  }}>
                  <Stack direction="row" spacing={1} sx={{ ml: 2 }}>
                    <MuiLink component={NextLink} href="#" underline="hover" color="inherit" variant="caption">Privacy</MuiLink>
                    <MuiLink component={NextLink} href="#" underline="hover" color="inherit" variant="caption">Terms</MuiLink>
                    <MuiLink component={NextLink} href="#" underline="hover" color="inherit" variant="caption">About Google</MuiLink>
                    <MuiLink component={NextLink} href="#" underline="hover" color="inherit" variant="caption">Google Products</MuiLink>
                    <MuiLink component={NextLink} href="#" underline="hover" color="inherit" variant="caption">About the Keyword</MuiLink>
                  </Stack>
                </Box>
              </Box>
            </Grid>
                
            {/* Right side: Help + language selector */}
            <Grid size={4}>
              <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
                <HelpIcon fontSize="small"/>
                <Typography variant="caption">Help</Typography>
                <DropdownMenu items={languageMenu} width={180} borderBottom={true} borderColor="divider" typoVariant="caption" />
                
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
