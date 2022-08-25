<template>
  <button
    :class="{ 'is-active': editor.isActive('underline') }"
    @click="editor.chain().focus().toggleUnderline().run()"
  >
    <FontAwesomeIcon icon="table" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>
