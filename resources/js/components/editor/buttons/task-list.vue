<template>
  <button
    :class="{ 'is-active': editor?.isActive('taskList') }"
    @click="editor.chain().focus().toggleTaskList().run()"
  >
    <FontAwesomeIcon icon="tasks" />
  </button>
</template>

<script>
export default {
  inject: ['editor'],
};
</script>

<style lang="scss">
ul[data-type='taskList'] {
  list-style: none;
  padding: 0;

  p {
    margin: 0;
  }

  li {
    display: flex;

    > label {
      flex: 0 0 auto;
      margin-right: 0.5rem;
      user-select: none;
    }

    > div {
      flex: 1 1 auto;
    }
  }
}
</style>
