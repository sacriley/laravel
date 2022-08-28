<template>
  <button
    ref="codeBlockButton"
    :class="{ 'is-active': editor?.isActive('codeBlock') }"
    @click="editor.chain().focus().toggleCodeBlock().run()"
  >
    <FontAwesomeIcon icon="window-maximize" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const codeBlockButton = ref(null);

    onMounted(() => {
      tippy(codeBlockButton.value, {
        content: '程式碼區塊',
        theme: 'tooltip',
      });
    });

    return {
      codeBlockButton,
    };
  },
};
</script>
