<template>
  <button
    ref="horizontalRuleButton"
    @click="editor.chain().focus().setHorizontalRule().run()"
  >
    <FontAwesomeIcon icon="grip-lines" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const horizontalRuleButton = ref(null);

    onMounted(() => {
      tippy(horizontalRuleButton.value, {
        content: '水平線',
        theme: 'tooltip',
      });
    });

    return {
      horizontalRuleButton,
    };
  },
};
</script>
