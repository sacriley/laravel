<template>
  <div class="editor">
    <div class="menu">
      <ParagraphButton />
      <TextSizeButton />
      <ColorButton />
      <HighlightButton />
      <Separator />
      <BoldButton />
      <ItalicButton />
      <StrikeButton />
      <UnderlineButton />
      <CodeButton />
      <Separator />
      <TextAlignButton />
      <BulletListButton />
      <OrderedListButton />
      <TaskListButton />
      <Separator />
      <LinkButton />
      <BlockQuoteButton />
      <CodeBlockButton />
      <YoutubeButton />
      <HorizontalRuleButton />
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

import ColorButton from '@/components/editor/buttons/color.vue';
import TextSizeButton from '@/components/editor/buttons/text-size.vue';
import HighlightButton from '@/components/editor/buttons/highlight.vue';
import BoldButton from '@/components/editor/buttons/bold.vue';
import StrikeButton from '@/components/editor/buttons/strike.vue';
import ClearButton from '@/components/editor/buttons/clear.vue';
import CodeButton from '@/components/editor/buttons/code.vue';
import ItalicButton from '@/components/editor/buttons/italic.vue';
import ParagraphButton from '@/components/editor/buttons/paragraph.vue';
import TextAlignButton from '@/components/editor/buttons/text-align.vue';
import LinkButton from '@/components/editor/buttons/link.vue';
import UnderlineButton from '@/components/editor/buttons/underline.vue';
import BlockQuoteButton from '@/components/editor/buttons/block-quote.vue';
import BulletListButton from '@/components/editor/buttons/bullet-list.vue';
import CodeBlockButton from '@/components/editor/buttons/code-block.vue';
import HorizontalRuleButton from '@/components/editor/buttons/horizontal-rule.vue';
import OrderedListButton from '@/components/editor/buttons/ordered-list.vue';
import TaskListButton from '@/components/editor/buttons/task-list.vue';
import YoutubeButton from '@/components/editor/buttons/youtube.vue';
import Separator from '@/components/editor/menu/separator.vue';

export default {
  components: {
    EditorContent,
    TextSizeButton,
    ColorButton,
    HighlightButton,
    BoldButton,
    ClearButton,
    CodeButton,
    ItalicButton,
    StrikeButton,
    ParagraphButton,
    TextAlignButton,
    LinkButton,
    UnderlineButton,
    BlockQuoteButton,
    BulletListButton,
    TaskListButton,
    CodeBlockButton,
    HorizontalRuleButton,
    OrderedListButton,
    YoutubeButton,
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
