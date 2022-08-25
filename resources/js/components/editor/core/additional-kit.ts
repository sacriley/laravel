import { Extension } from '@tiptap/core';
import Underline, { UnderlineOptions } from '@tiptap/extension-underline';
import TextAlign, { TextAlignOptions } from '@tiptap/extension-text-align';
import Placeholder, { PlaceholderOptions } from '@tiptap/extension-placeholder';
import Link, { LinkOptions } from '@tiptap/extension-link';
import Focus, { FocusOptions } from '@tiptap/extension-focus';
import TaskItem, { TaskItemOptions } from '@tiptap/extension-task-item';
import TaskList, { TaskListOptions } from '@tiptap/extension-task-list';
import TextStyle, { TextStyleOptions } from '@tiptap/extension-text-style';
import { Color, ColorOptions } from '@tiptap/extension-color';
import {
  Highlight,
  HighlightOptions,
} from '@/components/editor/extentions/highlight';
import {
  FontSize,
  FontSizeOptions,
} from '@/components/editor/extentions/font-size';
import Youtube, { YoutubeOptions } from '@tiptap/extension-youtube';

export interface AdditionalKitOptions {
  underline: Partial<UnderlineOptions> | false;
  focus: Partial<FocusOptions> | false;
  link: Partial<LinkOptions> | false;
  textAlign: Partial<TextAlignOptions> | false;
  placeholder: Partial<PlaceholderOptions> | false;
  taskList: Partial<TaskListOptions> | false;
  taskItem: Partial<TaskItemOptions> | false;
  textStyle: Partial<TextStyleOptions> | false;
  color: Partial<ColorOptions> | false;
  highlight: Partial<HighlightOptions> | false;
  fontSize: Partial<FontSizeOptions> | false;
  youtube: Partial<YoutubeOptions> | false;
}

const AdditionalKit = Extension.create<AdditionalKitOptions>({
  name: 'additional-kit',

  addExtensions() {
    const extensions = [];

    if (this.options.underline !== false) {
      extensions.push(Underline.configure(this.options?.underline));
    }

    if (this.options.focus !== false) {
      if (this.options?.focus) {
        extensions.push(Focus.configure(this.options?.focus));
      } else {
        extensions.push(
          Focus.configure({
            className: 'has-focus',
            mode: 'all',
          }),
        );
      }
    }

    if (this.options.link !== false) {
      if (this.options?.link) {
        extensions.push(Link.configure(this.options?.link));
      } else {
        extensions.push(
          Link.configure({
            openOnClick: false,
          }),
        );
      }
    }

    if (this.options.textAlign !== false) {
      if (this.options?.textAlign) {
        extensions.push(TextAlign.configure(this.options?.textAlign));
      } else {
        extensions.push(
          TextAlign.configure({
            types: ['heading', 'paragraph'],
          }),
        );
      }
    }

    if (this.options.placeholder !== false) {
      if (this.options?.placeholder) {
        extensions.push(Placeholder.configure(this.options?.placeholder));
      } else {
        extensions.push(
          Placeholder.configure({
            placeholder: '請輸入內容 ...',
          }),
        );
      }
    }

    if (this.options.taskList !== false) {
      if (this.options?.taskItem) {
        extensions.push(TaskList.configure(this.options?.taskList));
      } else {
        extensions.push(
          TaskList.configure({
            // HTMLAttributes: {
            //   class: 'task-list',
            // },
          }),
        );
      }
    }

    if (this.options.taskItem !== false) {
      if (this.options?.taskItem) {
        extensions.push(TaskItem.configure(this.options?.taskItem));
      } else {
        extensions.push(
          TaskItem.configure({
            nested: true,
          }),
        );
      }
    }

    if (this.options.textStyle !== false) {
      extensions.push(TextStyle.configure(this.options?.textStyle));
    }

    if (this.options.color !== false) {
      if (this.options?.color) {
        extensions.push(Color.configure(this.options?.color));
      } else {
        extensions.push(
          Color.configure({
            types: ['textStyle'],
          }),
        );
      }
    }

    if (this.options.highlight !== false) {
      if (this.options?.highlight) {
        extensions.push(Highlight.configure(this.options?.highlight));
      } else {
        extensions.push(
          Highlight.configure({
            types: ['textStyle'],
          }),
        );
      }
    }

    if (this.options.fontSize !== false) {
      if (this.options?.fontSize) {
        extensions.push(FontSize.configure(this.options?.fontSize));
      } else {
        extensions.push(
          FontSize.configure({
            types: ['textStyle'],
          }),
        );
      }
    }

    if (this.options.youtube !== false) {
      extensions.push(Youtube.configure(this.options?.youtube));
    }

    return extensions;
  },
});

export default AdditionalKit;
