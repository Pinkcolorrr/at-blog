import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import { Box, Button, ButtonGroup } from '@mui/material';
import { Editor } from '@tiptap/react';

import styles from './menu-bar.module.css';

export function MenuBar({ editor }: { editor: Editor }) {
  return (
    <Box className={styles.container}>
      <ButtonGroup variant='contained'>
        <Button
          size={'small'}
          color={editor.isActive('bold') ? 'secondary' : 'primary'}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          B
        </Button>
        <Button
          size={'small'}
          color={editor.isActive('italic') ? 'secondary' : 'primary'}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          It
        </Button>
        <Button
          size={'small'}
          color={editor.isActive('strike') ? 'secondary' : 'primary'}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          St
        </Button>
      </ButtonGroup>

      <ButtonGroup variant='contained'>
        <Button
          size={'small'}
          color={
            editor.isActive({ textAlign: 'left' }) ? 'secondary' : 'primary'
          }
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
        >
          <FormatAlignLeftIcon />
        </Button>
        <Button
          size={'small'}
          color={
            editor.isActive({ textAlign: 'center' }) ? 'secondary' : 'primary'
          }
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
        >
          <FormatAlignCenterIcon />
        </Button>
        <Button
          size={'small'}
          color={
            editor.isActive({ textAlign: 'right' }) ? 'secondary' : 'primary'
          }
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
        >
          <FormatAlignRightIcon />
        </Button>
        <Button
          size={'small'}
          color={
            editor.isActive({ textAlign: 'justify' }) ? 'secondary' : 'primary'
          }
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        >
          <FormatAlignJustifyIcon />
        </Button>
      </ButtonGroup>

      <ButtonGroup variant='contained'>
        <Button
          size={'small'}
          color={
            editor.isActive('heading', { level: 1 }) ? 'secondary' : 'primary'
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </Button>
        <Button
          size={'small'}
          color={
            editor.isActive('heading', { level: 2 }) ? 'secondary' : 'primary'
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </Button>
        <Button
          size={'small'}
          color={
            editor.isActive('heading', { level: 3 }) ? 'secondary' : 'primary'
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          H3
        </Button>
        <Button
          size={'small'}
          color={
            editor.isActive('heading', { level: 4 }) ? 'secondary' : 'primary'
          }
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
        >
          H4
        </Button>
      </ButtonGroup>

      <Box>
        <Button size={'small'} onClick={() => editor.chain().focus().undo().run()}>
          <UndoIcon />
        </Button>
        <Button size={'small'} onClick={() => editor.chain().focus().redo().run()}>
          <RedoIcon />
        </Button>
      </Box>
    </Box>
  );
}
