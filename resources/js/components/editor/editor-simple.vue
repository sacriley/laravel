<template>
  <div class="editor">
    <div class="menu">
      <button
        :class="{ 'is-active': editor?.isActive('bold') }"
        @click="editor.chain().focus().toggleBold().run()"
      >
        <FontAwesomeIcon icon="bold" />
      </button>
    </div>
    <EditorContent :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import '@/components/editor/scss/default.scss';

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    };
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>I’m running Tiptap with Vue.js</p>',
      extensions: [StarterKit],
    });
  },

  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>
