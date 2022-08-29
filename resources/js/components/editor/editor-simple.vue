<template>
  <div class="editor">
    <div
      class="menu"
      :style="{
        top: `${menuStickyTop}px`,
      }"
    >
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
      <ImageButton />
      <TableButton />
      <BlockQuoteButton />
      <CodeBlockButton />
      <Separator />
      <YoutubeButton />
      <EmbedButton />
      <ClearButton />
    </div>
    <EditorContent
      :editor="editor"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        minHeight: `${minHeight}px`,
        maxHeight: `${maxHeight}px`,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import {
  createEditor,
  EditorContent,
} from '@/components/editor/core/editor-core';

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
import ImageButton from '@/components/editor/buttons/image.vue';
import UnderlineButton from '@/components/editor/buttons/underline.vue';
import BlockQuoteButton from '@/components/editor/buttons/block-quote.vue';
import BulletListButton from '@/components/editor/buttons/bullet-list.vue';
import CodeBlockButton from '@/components/editor/buttons/code-block.vue';
import OrderedListButton from '@/components/editor/buttons/ordered-list.vue';
import TaskListButton from '@/components/editor/buttons/task-list.vue';
import YoutubeButton from '@/components/editor/buttons/youtube.vue';
import EmbedButton from '@/components/editor/buttons/embed.vue';
import TableButton from '@/components/editor/buttons/table.vue';
import Separator from '@/components/editor/menu/separator.vue';

const { content, placeholder = '請輸入內容 ...' } = defineProps<{
  content?: string;
  placeholder?: string;
  menuStickyTop?: number;
  width?: number;
  height?: number;
  minHeight?: number;
  maxHeight?: number;
}>();

const { editor } = createEditor({ content, placeholder });
</script>
