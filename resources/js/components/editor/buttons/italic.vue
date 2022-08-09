<template>
  <button
    :class="{ 'is-active': editor?.isActive('italic') }"
    @click="editor.chain().focus().toggleItalic().run()"
  >
    <FontAwesomeIcon icon="italic" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>
