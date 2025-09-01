"use client";

import { useState, MouseEvent } from "react";
import { Menu, MenuItem, Typography, Box, Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export interface MenuItemType {
  label: string;
}

interface DropdownMenuProps {
  items: MenuItemType[];
  width?: number | string;
  borderBottom?: boolean;
  borderColor?: string;
  typoVariant?: string;
}

export default function DropdownMenu({
  items,
  width = "auto",
  borderBottom = false,
  borderColor = "divider",
  typoVariant = "caption",
}: DropdownMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState<MenuItemType>(items[0]);

  const handleOpen = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (item: MenuItemType) => {
    setSelected(item);
    handleClose();
    console.log(`${item.label} selected`);
  };

  return (
    <Box sx={{ width }}>
      <Typography
        variant={typoVariant}
        component="button"
        onClick={handleOpen}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          padding: 0,
          margin: 0,
          cursor: "pointer",
          borderBottom: borderBottom ? "1px solid" : "none",
          borderColor: borderBottom ? borderColor : "transparent",
        }}
      >
        {selected.label}
        <ArrowDropDownIcon fontSize="inherit" />
      </Typography>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={() => handleSelect(item)}>
            <Stack direction="row" spacing={1} alignItems="center">
              {/* Show checkmark if this item is selected */}
              {item.label === selected.label && <span>✓</span>}
              <span>{item.label}</span>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
