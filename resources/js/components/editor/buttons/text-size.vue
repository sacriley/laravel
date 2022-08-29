<template>
  <div class="font-size-toggle-button">
    <button ref="textSizeButton" @click="togglePanel">
      <FontAwesomeIcon icon="text-height" />
    </button>
    <div
      :class="{
        'font-size-panel': true,
        'is-open': isOpen,
      }"
    >
      <button
        :class="{
          'font-size-button': true,
        }"
        @click="editor.chain().focus().unsetFontSize().run() && closePanel()"
      >
        預設大小
      </button>
      <button
        v-for="size in sizes"
        :class="{
          'font-size-button': true,
          'is-active': editor?.isActive('textStyle', {
            fontSize: size,
          }),
        }"
        @click="editor.chain().focus().setFontSize(size).run() && closePanel()"
      >
        {{ size }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref } from 'vue';
import tippy from 'tippy.js';

const editor: any = inject('editor');

const isOpen = ref(false);

const sizes = [12, 14, 16, 20, 24, 28, 32, 36, 48, 60, 72];
const textSizeButton = ref(null);

onMounted(() => {
  tippy(textSizeButton.value, {
    content: '文字大小',
    theme: 'tooltip',
  });
});

const closePanel = () => {
  isOpen.value = false;
};

const togglePanel = () => {
  isOpen.value = !isOpen.value;
};

document.addEventListener('click', (event: any) => {
  if (
    isOpen.value &&
    !event.path.includes(document.querySelector('.font-size-toggle-button'))
  ) {
    closePanel();
  }
});
</script>

<style lang="scss" scoped>
$color-blue: #027de5;

.menu {
  .font-size-toggle-button {
    position: relative;
    .font-size-panel {
      position: absolute;
      display: none;
      background: #fff;
      z-index: 1;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-top: 2px;
      width: 70px;
      &.is-open {
        display: block;
      }
      .font-size-button {
        text-align: left;
        background: none;
        margin-bottom: 2px;
        margin-right: 0;
        width: 100%;
        &:last-child {
          margin-bottom: 0;
        }
        &:hover {
          background: #ddd;
        }
        &.is-active {
          background: $color-blue;
          color: #fff;
        }
      }
    }
  }
}
</style>
