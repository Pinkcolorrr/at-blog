import { PostsFeed } from '@features/posts/posts-feed/posts-feed';

import styles from './blog.module.css';

export default function PostsPage() {
  return (
    <div className={styles.blogPage}>
      <PostsFeed />
    </div>
  );
}
