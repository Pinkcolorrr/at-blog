'use client';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
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
      sx={{ width: '100%' }}
      onChange={(_, v) => v && setMode(v)}
    >
      <ToggleButton
        sx={{ flexGrow: 1 }}
        value={'dark'}
        aria-label={'theme dark'}
      >
        {value === 'dark' ? <DarkModeIcon /> : <DarkModeOutlined />}
      </ToggleButton>
      <ToggleButton
        sx={{ flexGrow: 1 }}
        value={'light'}
        aria-label={'theme light'}
      >
        {value === 'light' ? <LightModeIcon /> : <LightModeOutlined />}
      </ToggleButton>
      <ToggleButton
        sx={{ flexGrow: 1 }}
        value={'system'}
        aria-label={'theme system'}
      >
        <ComputerIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
