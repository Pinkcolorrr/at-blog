import { Box, Card, Divider, Link, Typography } from '@mui/material';
import { Post as PostProps } from '@prisma/client';
import Image from 'next/image';
import NextLink from 'next/link';

import styles from './post-preview.module.css';

export function PostPreview(post: PostProps) {
  return (
    <Card className={styles.post}>
      <Typography variant={'h3'} color='textSecondary'>
        {post.title}
      </Typography>
      <Divider className={styles.divider} />
      <Box className={styles.imageContainer}>
        <Image
          src={'/images/hero-desktop.png'}
          alt={'icon'}
          width={400}
          height={300}
        />
      </Box>
      <Typography noWrap>{post.content}</Typography>
      <Link component={NextLink} href={`/blog/${post.id}`}>
        Read
      </Link>
    </Card>
  );
}
