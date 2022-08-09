<template>
  <button
    :class="{ 'is-active': editor?.isActive('strike') }"
    @click="editor.chain().focus().toggleStrike().run()"
  >
    <FontAwesomeIcon icon="strikethrough" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>
