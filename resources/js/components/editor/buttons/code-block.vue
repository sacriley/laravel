<template>
  <button
    :class="{ 'is-active': editor?.isActive('codeBlock') }"
    @click="editor.chain().focus().toggleCodeBlock().run()"
  >
    <FontAwesomeIcon icon="file-code" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>
