<template>
  <button
    ref="clearButton"
    @click="editor.chain().focus().unsetAllMarks().clearNodes().run()"
  >
    <FontAwesomeIcon icon="ban" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const clearButton = ref(null);

    onMounted(() => {
      tippy(clearButton.value, {
        content: '清除格式',
        theme: 'tooltip',
      });
    });

    return {
      clearButton,
    };
  },
};
</script>
