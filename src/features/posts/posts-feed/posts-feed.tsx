import { Post } from '@features/posts';
import { Grid2 } from '@mui/material';
import prisma from '@prisma/db';

export async function PostsFeed() {
  const posts = await prisma.post.findMany();

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
