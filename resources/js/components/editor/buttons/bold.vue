<template>
  <button
    :class="{ 'is-active': editor?.isActive('bold') }"
    @click="editor.chain().focus().toggleBold().run()"
  >
    <FontAwesomeIcon icon="bold" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>
