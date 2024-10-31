import { Post } from '@prisma/client';
import prisma from '@prisma/db';

export async function getPosts(): Promise<Post[]> {
  try {
    return await prisma.post.findMany();
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all posts.');
  }
}
