<template>
  <div class="link-button-group">
    <button
      :class="{ 'is-active': editor.isActive('link') }"
      :disabled="!editor.isActive('link') && getSelectedText() === ''"
      @click="addLink"
    >
      <FontAwesomeIcon icon="link" />
    </button>
    <BubbleMenu
      :shouldShow="shouldShow"
      :class="{ 'link-panel': true }"
      :editor="editor"
      pluginKey="link"
    >
      <input
        ref="inputLink"
        type="text"
        placeholder="http://"
        :value="editor.getAttributes('link').href"
      />
      <button @click="changeLink">
        <FontAwesomeIcon icon="check" />
      </button>
      <button @click="openNewLink">
        <FontAwesomeIcon icon="external-link-alt" />
      </button>
      <button @click="editor.chain().focus().unsetLink().run()">
        <FontAwesomeIcon icon="unlink" />
      </button>
    </BubbleMenu>
  </div>
</template>

<script lang="ts">
import { inject, ref, nextTick } from 'vue';
import { BubbleMenu } from '@tiptap/vue-2';

export default {
  components: {
    BubbleMenu,
  },
  setup() {
    const editor: any = inject('editor');

    const inputLink = ref(null);

    const selectedText = ref('selectedText');

    const getSelectedText = (): string => {
      // console.log(editor.value);
      const { state } = editor.value;
      const { from, to } = state.selection;
      return state.doc.textBetween(from, to, ' ');
    };

    const addLink = async () => {
      await nextTick();
      const url = editor.value.getAttributes('link').href;

      if (url && !editor.value.isActive('link')) {
        editor.value.chain().focus().setLink({ href: url }).run();
        return;
      }

      if (url && editor.value.isActive('link')) {
        editor.value
          .chain()
          .focus()
          .extendMarkRange('link', { href: url })
          .run();
        return;
      }

      editor.value
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: '' })
        .run();
    };

    // const setLink = async (event) => {
    //   const url = event.target.value;
    //
    //   if (url === null) {
    //     editor.value.chain().focus().extendMarkRange('link').unsetLink()!.run();
    //     return;
    //   }
    //
    //   editor.value.chain().focus().setLink({ href: url }).run();
    // };

    const shouldShow = (arg) => {
      const isActive = arg.editor.isActive('link');
      return isActive;
    };

    const openNewLink = () => {
      const url = editor.value.getAttributes('link').href;
      if (url) {
        window.open(url, '_blank');
      }
    };

    const changeLink = async () => {
      let url = (inputLink.value as HTMLInputElement).value;

      if (!url.includes('http://', 0) && !url.includes('https://', 0)) {
        url = `http://${url}`;
      }

      if (url === '') {
        editor.value.chain().focus().extendMarkRange('link').unsetLink()!.run();
        return;
      }

      editor.value
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
      // editor.value.commands.blur();
    };

    return {
      editor,
      selectedText,
      inputLink,
      shouldShow,
      openNewLink,
      addLink,
      changeLink,
      getSelectedText,
    };
  },
};
</script>

<style lang="scss" scoped>
$color-blue: #027de5;
.link-panel {
  background: #f1f1f1;
  padding: 2px 0 2px 2px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 2px rgba(50, 50, 50, 0.1);
  input {
    height: 25px;
    border: 0;
    margin-right: 5px;
    width: 200px;
    &:focus {
      outline: 0;
    }
  }
  button {
    background: #f1f1f1;
    border-radius: 3px;
    width: 25px;
    height: 25px;
    border: 0;
    cursor: pointer;
    margin-right: 5px;
    transition: background 0.2s;
    &:hover {
      background: #ddd;
    }
  }
}
</style>
