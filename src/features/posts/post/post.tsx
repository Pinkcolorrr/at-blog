import { Box, Card, Divider, Link, Typography } from '@mui/material';
import { Post as PostProps } from '@prisma/client';
import Image from 'next/image';
import NextLink from 'next/link';

export function Post(post: PostProps) {
  return (
    <Card sx={{ p: 4, borderRadius: 5, maxWidth: 400 }}>
      <Typography variant={'h3'} color='textSecondary'>
        {post.title}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Image
          src={'/images/hero-desktop.png'}
          alt={'asd'}
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
