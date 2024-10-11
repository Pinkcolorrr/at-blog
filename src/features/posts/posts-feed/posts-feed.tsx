import { getPosts } from '@api/posts';
import { Post } from '@features/posts';
import { Grid2 } from '@mui/material';

export async function PostsFeed() {
  const posts = await getPosts();

  return (
    <Grid2 container spacing={4} sx={{ justifyContent: 'center' }}>
      {posts.map((post) => (
        <Grid2 key={post.id}>
          <Post {...post} />
        </Grid2>
      ))}
    </Grid2>
  );
}
