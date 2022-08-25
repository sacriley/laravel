<template>
  <button @click="addEmbed">
    <FontAwesomeIcon icon="globe-asia" />
  </button>
</template>

<script lang="ts">
import { inject } from 'vue';

export default {
  inject: ['editor'],
  setup() {
    const editor: any = inject('editor');

    const addEmbed = () => {
      const url = window.prompt('URL');

      if (url) {
        editor.value.chain().focus().setEmbed({ src: url }).run();
      }
    };

    return {
      editor,
      addEmbed,
    };
  },
};
</script>
