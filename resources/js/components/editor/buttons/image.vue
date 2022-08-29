<template>
  <button
    ref="imageButton"
    :class="{ 'is-active': editor.isActive('underline') }"
    @click="addImage"
  >
    <FontAwesomeIcon icon="image" />
  </button>
</template>

<script lang="ts" setup>
import { ref, onMounted, inject } from 'vue';
import tippy from 'tippy.js';

const editor: any = inject('editor');
const imageButton = ref(null);
const addImage = () => {
  const url = window.prompt('URL');

  if (url) {
    editor.value.chain().focus().setImage({ src: url }).run();
  }
};

onMounted(() => {
  tippy(imageButton.value, {
    content: '插入圖片',
    theme: 'tooltip',
  });
});
</script>

<script lang="ts">
export default {
  name: 'ImageButton',
};
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  img {
    max-width: 100%;
    height: auto;

    &.ProseMirror-selectednode {
      outline: 3px solid #68cef8;
    }
  }
}
</style>
