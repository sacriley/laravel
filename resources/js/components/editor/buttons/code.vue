<template>
  <button
    ref="codeButton"
    :class="{ 'is-active': editor?.isActive('code') }"
    @click="editor.chain().focus().toggleCode().run()"
  >
    <FontAwesomeIcon icon="code" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const codeButton = ref(null);

    onMounted(() => {
      tippy(codeButton.value, {
        content: '標註',
        theme: 'tooltip',
      });
    });

    return {
      codeButton,
    };
  },
};
</script>
