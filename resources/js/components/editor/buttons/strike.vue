<template>
  <button
    ref="strikeButton"
    :class="{ 'is-active': editor?.isActive('strike') }"
    @click="editor.chain().focus().toggleStrike().run()"
  >
    <FontAwesomeIcon icon="strikethrough" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const strikeButton = ref(null);

    onMounted(() => {
      tippy(strikeButton.value, {
        content: '刪除線',
        theme: 'tooltip',
      });
    });

    return {
      strikeButton,
    };
  },
};
</script>
