import { Extension } from '@tiptap/core';
import Underline, { UnderlineOptions } from '@tiptap/extension-underline';
import TextAlign, { TextAlignOptions } from '@tiptap/extension-text-align';
import Placeholder, { PlaceholderOptions } from '@tiptap/extension-placeholder';
import Link, { LinkOptions } from '@tiptap/extension-link';
import Focus, { FocusOptions } from '@tiptap/extension-focus';

export interface AdditionalKitOptions {
  underline: Partial<UnderlineOptions> | false;
  focus: Partial<FocusOptions> | false;
  link: Partial<LinkOptions> | false;
  textAlign: Partial<TextAlignOptions> | false;
  placeholder: Partial<PlaceholderOptions> | false;
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

    return extensions;
  },
});

export default AdditionalKit;
