'use client';

import { MoreVert } from '@mui/icons-material';
import { Box, IconButton, Popover } from '@mui/material';
import { MouseEvent, ReactNode, useState } from 'react';

export function HeaderActions({ children }: { children: ReactNode }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ padding: 2 }}>{children}</Box>
      </Popover>
    </Box>
  );
}
