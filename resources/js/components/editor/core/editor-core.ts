import { computed, provide, reactive } from 'vue';
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import AdditionalKit from '@/components/editor/core/additional-kit';
import '@/components/editor/scss/default.scss';

const createEditor = (options) => {
  const { content, placeholder } = options;

  const editor = reactive(
    new Editor({
      content,
      extensions: [
        StarterKit,
        AdditionalKit.configure({
          placeholder: {
            placeholder,
          },
        }),
      ],
    }),
  );

  provide(
    'editor',
    computed(() => editor),
  );

  return { editor };
};

export { createEditor, EditorContent };
