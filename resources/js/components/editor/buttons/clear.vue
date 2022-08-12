<template>
  <button @click="editor.chain().focus().unsetAllMarks().clearNodes().run()">
    <FontAwesomeIcon icon="ban" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>
