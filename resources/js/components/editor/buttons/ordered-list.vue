<template>
  <button
    :class="{ 'is-active': editor?.isActive('orderedList') }"
    @click="editor.chain().focus().toggleOrderedList().run()"
  >
    <FontAwesomeIcon icon="list-ol" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>
