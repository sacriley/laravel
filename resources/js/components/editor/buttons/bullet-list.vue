<template>
  <button
    :class="{ 'is-active': editor?.isActive('bulletList') }"
    @click="editor.chain().focus().toggleBulletList().run()"
  >
    <FontAwesomeIcon icon="list" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>
