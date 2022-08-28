<template>
  <button
    ref="orderedListButton"
    :class="{ 'is-active': editor?.isActive('orderedList') }"
    @click="editor.chain().focus().toggleOrderedList().run()"
  >
    <FontAwesomeIcon icon="list-ol" />
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import tippy from 'tippy.js';

export default {
  inject: ['editor'],
  setup() {
    const orderedListButton = ref(null);

    onMounted(() => {
      tippy(orderedListButton.value, {
        content: '有序清單',
        theme: 'tooltip',
      });
    });

    return {
      orderedListButton,
    };
  },
};
</script>
