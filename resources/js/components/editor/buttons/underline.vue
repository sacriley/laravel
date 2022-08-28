<template>
  <button
    ref="underlineButton"
    :class="{ 'is-active': editor.isActive('underline') }"
    @click="editor.chain().focus().toggleUnderline().run()"
  >
    <FontAwesomeIcon icon="underline" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const underlineButton = ref(null);

    onMounted(() => {
      tippy(underlineButton.value, {
        content: '底線',
        theme: 'tooltip',
      });
    });

    return {
      underlineButton,
    };
  },
};
</script>
