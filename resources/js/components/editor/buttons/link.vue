<template>
  <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
    <FontAwesomeIcon icon="link" />
  </button>
  <!--  <button @click="editor.chain().focus().unsetLink().run()" :disabled="!editor.isActive('link')">-->
  <!--    unsetLink-->
  <!--  </button>-->
</template>

<script lang="ts">
import { inject } from 'vue';

export default {
  setup() {
    const editor: any = inject('editor');

    const setLink = () => {
      const previousUrl = editor.value.getAttributes('link').href;
      const url = window.prompt('URL', previousUrl);

      // cancelled
      if (url === null) {
        return;
      }

      // empty
      if (url === '') {
        editor.value.chain().focus().extendMarkRange('link').unsetLink().run();

        return;
      }

      // update link
      editor.value
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
    };

    return { editor, setLink };
  },
};
</script>
