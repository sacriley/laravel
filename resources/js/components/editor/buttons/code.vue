<template>
  <button
    :class="{ 'is-active': editor?.isActive('code') }"
    @click="editor.chain().focus().toggleCode().run()"
  >
    <FontAwesomeIcon icon="code" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>
