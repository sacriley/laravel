<template>
  <button
    ref="italicButton"
    :class="{ 'is-active': editor?.isActive('italic') }"
    @click="editor.chain().focus().toggleItalic().run()"
  >
    <FontAwesomeIcon icon="italic" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const italicButton = ref(null);

    onMounted(() => {
      tippy(italicButton.value, {
        content: '斜體',
        theme: 'tooltip',
      });
    });

    return {
      italicButton,
    };
  },
};
</script>
