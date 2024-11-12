import Focus from '@tiptap/extension-focus';
import TextAlign from '@tiptap/extension-text-align';
import { UseEditorOptions } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';

import styles from './post-editor.module.css';
export const POST_EDITOR_CONFIG: UseEditorOptions = {
  content: 'asdasd',
  extensions: [
    StarterKit,
    Focus.configure({
      className: styles.tiptapFocus,
      mode: 'all',
    }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
  ],
  immediatelyRender: false,
  editorProps: {
    attributes: {
      class: styles.tiptapRoot,
    },
  },
};
