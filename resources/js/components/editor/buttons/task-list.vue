<template>
  <button
    ref="taskListButton"
    :class="{ 'is-active': editor?.isActive('taskList') }"
    @click="editor.chain().focus().toggleTaskList().run()"
  >
    <FontAwesomeIcon icon="tasks" />
  </button>
</template>

<script lang="ts" setup>
import { ref, onMounted, inject } from 'vue';
import tippy from 'tippy.js';

const editor: any = inject('editor');
const taskListButton = ref(null);

onMounted(() => {
  tippy(taskListButton.value, {
    content: '任務清單',
    theme: 'tooltip',
  });
});
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
