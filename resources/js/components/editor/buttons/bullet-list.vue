<template>
  <button
    ref="bulletListButton"
    :class="{ 'is-active': editor?.isActive('bulletList') }"
    @click="editor.chain().focus().toggleBulletList().run()"
  >
    <FontAwesomeIcon icon="list" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const bulletListButton = ref(null);

    onMounted(() => {
      tippy(bulletListButton.value, {
        content: '符號清單',
        theme: 'tooltip',
      });
    });

    return {
      bulletListButton,
    };
  },
};
</script>
