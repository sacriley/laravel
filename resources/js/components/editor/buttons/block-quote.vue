<template>
  <button
    ref="blockQuoteButton"
    :class="{ 'is-active': editor?.isActive('blockquote') }"
    @click="editor.chain().focus().toggleBlockquote().run()"
  >
    <FontAwesomeIcon icon="quote-left" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const blockQuoteButton = ref(null);

    onMounted(() => {
      tippy(blockQuoteButton.value, {
        content: '引述區塊',
        theme: 'tooltip',
      });
    });

    return {
      blockQuoteButton,
    };
  },
};
</script>
