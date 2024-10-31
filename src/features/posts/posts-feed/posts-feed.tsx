import { getPosts } from '@api/posts';
import { Post } from '@features/posts';
import { Box, Grid2 } from '@mui/material';

import { PostsFilters } from '../posts-filters/posts-filters';

export async function PostsFeed() {
  const posts = await getPosts();

  return (
    <div>
      <Box sx={{ marginBottom: 4 }}>
        <PostsFilters />
      </Box>
      <Grid2 container spacing={4} sx={{ justifyContent: 'center' }}>
        {posts.map((post) => (
          <Grid2 key={post.id}>
            <Post {...post} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}
