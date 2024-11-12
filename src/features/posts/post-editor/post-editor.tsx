'use client';
import { Box, Container } from '@mui/material';
import { EditorContent, useEditor } from '@tiptap/react';

import { MenuBar } from './menu-bar/menu-bar';
import styles from './post-editor.module.css';
import { POST_EDITOR_CONFIG } from './post-editor-config';

export function PostEditor() {
  const editor = useEditor(POST_EDITOR_CONFIG);

  return (
    <Container className={styles.container}>
      <Box className={styles.menuBarContainer}>
        {editor && <MenuBar editor={editor} />}
      </Box>
      <EditorContent className={styles.editorContent} editor={editor} />
    </Container>
  );
}
