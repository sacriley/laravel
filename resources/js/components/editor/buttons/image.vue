<template>
  <button
    ref="imageButton"
    :class="{ 'is-active': editor.isActive('underline') }"
    @click="editor.chain().focus().toggleUnderline().run()"
  >
    <FontAwesomeIcon icon="image" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const imageButton = ref(null);

    onMounted(() => {
      tippy(imageButton.value, {
        content: '插入圖片',
        theme: 'tooltip',
      });
    });

    return {
      imageButton,
    };
  },
};
</script>
