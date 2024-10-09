import { Post } from '@features/posts';
import { Grid2 } from '@mui/material';

export function PostsFeed() {
  return (
    <Grid2 container spacing={4} sx={{justifyContent: 'center'}}>
      <Grid2>
        <Post></Post>
      </Grid2>
      <Grid2>
        <Post></Post>
      </Grid2>
      <Grid2>
        <Post></Post>
      </Grid2>
      <Grid2>
        <Post></Post>
      </Grid2>
    </Grid2>
  );
}
