<template>
  <button @click="editor.chain().focus().setHorizontalRule().run()">
    <FontAwesomeIcon icon="grip-lines" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>
