'use client';
import ComputerIcon from '@mui/icons-material/Computer';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ToggleButton, ToggleButtonGroup, useColorScheme } from '@mui/material';
import { useEffect, useState } from 'react';
export function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [value, setValue] = useState<'light' | 'dark' | 'system' | undefined>();

  useEffect(() => {
    setValue(mode);
  }, [mode, setMode]);

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      size={'small'}
      aria-label='theme select'
      onChange={(_, v) => v && setMode(v)}
    >
      <ToggleButton value={'dark'} aria-label={'theme dark'}>
        <DarkModeIcon />
      </ToggleButton>
      <ToggleButton value={'light'} aria-label={'theme light'}>
        <LightModeIcon />
      </ToggleButton>
      <ToggleButton value={'system'} aria-label={'theme system'}>
        <ComputerIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
