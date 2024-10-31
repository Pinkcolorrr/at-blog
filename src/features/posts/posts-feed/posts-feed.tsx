import { getPosts } from '@api/posts';
import { Box, Grid2 } from '@mui/material';

import { PostPreview } from './post-preview/post-preview';
import styles from './posts-feed.module.css';
import { PostsFilters } from './posts-filters';

export async function PostsFeed() {
  const posts = await getPosts();

  return (
    <div>
      <Box className={styles.filterContainer}>
        <PostsFilters />
      </Box>
      <Grid2 className={styles.feedContainer} container spacing={4}>
        {posts.map((post) => (
          <Grid2 key={post.id}>
            <PostPreview {...post} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}
