<template>
  <button ref="youtubeButton" @click="addVideo">
    <FontAwesomeIcon icon="video" />
  </button>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref } from 'vue';
import tippy from 'tippy.js';

const editor: any = inject('editor');
const width = ref(640);
const height = ref(480);
const youtubeButton = ref(null);

onMounted(() => {
  tippy(youtubeButton.value, {
    content: '插入 Youtube',
    theme: 'tooltip',
  });
});

const addVideo = () => {
  const url = prompt('Enter YouTube URL');

  editor.value.commands.setYoutubeVideo({
    src: url,
    width: Math.max(640, width.value) || 640,
    height: Math.max(480, height.value) || 480,
  });
};
</script>

<style lang="scss">
.ProseMirror {
  iframe {
    border: 8px solid #000;
    border-radius: 4px;
    min-width: 200px;
    min-height: 200px;
    display: block;
    outline: 0px solid transparent;
  }

  div[data-youtube-video] {
    cursor: move;
    padding: 6px;
    overflow: hidden;
  }

  .ProseMirror-selectednode iframe {
    transition: outline 0.15s;
    outline: 6px solid #ece111;
  }
}
</style>
