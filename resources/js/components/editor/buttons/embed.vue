<template>
  <button ref="embedButton" @click="addEmbed">
    <FontAwesomeIcon icon="globe-asia" />
  </button>
</template>

<script lang="ts">
import { inject, onMounted, ref } from 'vue';
import tippy from 'tippy.js';

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

    const embedButton = ref(null);

    onMounted(() => {
      tippy(embedButton.value, {
        content: '插入多媒體',
        theme: 'tooltip',
      });
    });

    return {
      editor,
      embedButton,
      addEmbed,
    };
  },
};
</script>
