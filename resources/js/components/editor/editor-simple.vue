<template>
  <div class="editor">
    <div class="menu">
      <ParagraphButton />
      <BoldButton />
      <ItalicButton />
      <StrikeButton />
      <CodeButton />
      <BulletList />
      <OrderedList />
      <BlockQuote />
      <CodeBlock />
      <HorizontalRule />
      <ClearButton />
    </div>
    <EditorContent :editor="editor" />
  </div>
</template>

<script lang="ts">
import { reactive, computed } from 'vue';
import { Editor, EditorContent } from '@tiptap/vue-2';
import BoldButton from '@/components/editor/buttons/bold.vue';
import StrikeButton from '@/components/editor/buttons/strike.vue';
import ClearButton from '@/components/editor/buttons/clear.vue';
import CodeButton from '@/components/editor/buttons/code.vue';
import ItalicButton from '@/components/editor/buttons/italic.vue';
import BlockQuote from '@/components/editor/buttons/block-quote.vue';
import BulletList from '@/components/editor/buttons/bullet-list.vue';
import CodeBlock from '@/components/editor/buttons/code-block.vue';
import HorizontalRule from '@/components/editor/buttons/horizontal-rule.vue';
import OrderedList from '@/components/editor/buttons/ordered-list.vue';
import ParagraphButton from '@/components/editor/buttons/paragraph.vue';
import StarterKit from '@tiptap/starter-kit';
import '@/components/editor/scss/default.scss';

export default {
  components: {
    EditorContent,
    BoldButton,
    ClearButton,
    CodeButton,
    ItalicButton,
    StrikeButton,
    ParagraphButton,
    BlockQuote,
    BulletList,
    CodeBlock,
    HorizontalRule,
    OrderedList,
  },
  provide() {
    return {
      editor: computed(() => this.editor),
    };
  },
  setup() {
    const editor: any = reactive(
      new Editor({
        content: '<p>I’m running Tiptap with Vue.js</p>',
        extensions: [StarterKit],
      }),
    );

    return { editor };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>
