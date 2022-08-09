<template>
  <button
    :class="{ 'is-active': editor?.isActive('blockquote') }"
    @click="editor.chain().focus().toggleBlockquote().run()"
  >
    <FontAwesomeIcon icon="quote-left" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>
