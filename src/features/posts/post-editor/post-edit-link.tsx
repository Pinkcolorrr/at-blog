import CreateIcon from '@mui/icons-material/Create';
import { IconButton } from '@mui/material';
import NextLink from 'next/link';

export function PostEditLink() {
  return (
    <IconButton component={NextLink} href={'posts/new'}>
      <CreateIcon />
    </IconButton>
  );
}
