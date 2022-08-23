<template>
  <div class="editor">
    <div class="menu">
      <ParagraphButton />
      <BoldButton />
      <ItalicButton />
      <StrikeButton />
      <UnderlineButton />
      <CodeButton />
      <Separator />
      <LinkButton />
      <Separator />
      <TextAlignButton />
      <BulletList />
      <OrderedList />
      <BlockQuote />
      <CodeBlock />
      <Separator />
      <HorizontalRule />
      <ClearButton />
    </div>
    <EditorContent :editor="editor" />
  </div>
</template>

<script lang="ts">
import { computed, reactive } from 'vue';
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import AdditionalKit from '@/components/editor/core/additional-kit';
import '@/components/editor/scss/default.scss';

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
import TextAlignButton from '@/components/editor/buttons/text-align.vue';
import LinkButton from '@/components/editor/buttons/link.vue';
import UnderlineButton from '@/components/editor/buttons/underline.vue';
import Separator from '@/components/editor/menu/separator.vue';

export default {
  components: {
    EditorContent,
    BoldButton,
    ClearButton,
    CodeButton,
    ItalicButton,
    StrikeButton,
    ParagraphButton,
    TextAlignButton,
    LinkButton,
    UnderlineButton,
    BlockQuote,
    BulletList,
    CodeBlock,
    HorizontalRule,
    OrderedList,
    Separator,
  },
  provide() {
    return {
      editor: computed(() => this.editor),
    };
  },
  setup() {
    const editor = reactive(
      new Editor({
        content:
          '<h3>I’m running Tiptap with Vue.js</h3><p>I’m running <a href="http://fanswoo.com">Tiptap</a> with Vue.js</p>',
        extensions: [
          StarterKit,
          AdditionalKit.configure({
            // placeholder: {
            //   placeholder: 'test...',
            // },
          }),
        ],
      }),
    );
    return { editor };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>
