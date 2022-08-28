<template>
  <button
    ref="boldButton"
    :class="{ 'is-active': editor?.isActive('bold') }"
    @click="editor.chain().focus().toggleBold().run()"
  >
    <FontAwesomeIcon icon="bold" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const boldButton = ref(null);

    onMounted(() => {
      tippy(boldButton.value, {
        content: '粗體',
        theme: 'tooltip',
      });
    });

    return {
      boldButton,
    };
  },
};
</script>
