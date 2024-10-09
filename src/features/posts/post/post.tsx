import { Box, Card, Divider, Link, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

export function Post() {
  return (
    <Card sx={{ p: 4, borderRadius: 5, maxWidth: 400 }}>
      <Typography variant={'h3'} color='textSecondary'>
        How JS Really work inside
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
      <Typography noWrap>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea
        error excepturi explicabo quia, recusandae rem voluptatibus voluptatum!
        Commodi corporis eaque harum, labore quod rem rerum sapiente velit
        voluptatibus. Fugit?
      </Typography>
      <Link component={NextLink} href={'#'}>Read</Link>
    </Card>
  );
}
