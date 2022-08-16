<template>
  <div class="paragraph-toggle-button">
    <button @click="toggleParagraphPanel">
      {{ displayText }}
      <FontAwesomeIcon icon="caret-down" />
    </button>
    <div
      :class="{
        'paragraph-panel': true,
        'is-open': isOpen,
      }"
    >
      <button
        :class="{
          'paragraph-button': true,
          'is-active': editor.isActive('heading', { level: 1 }),
        }"
        @click="
          editor.chain().focus().toggleHeading({ level: 1 }).run() &&
            changeDisplayText(1)
        "
      >
        {{ textItems.h1 }}
      </button>
      <button
        :class="{
          'paragraph-button': true,
          'is-active': editor.isActive('heading', { level: 2 }),
        }"
        @click="
          editor.chain().focus().toggleHeading({ level: 2 }).run() &&
            changeDisplayText(2)
        "
      >
        {{ textItems.h2 }}
      </button>
      <button
        :class="{
          'paragraph-button': true,
          'is-active': editor.isActive('heading', { level: 3 }),
        }"
        @click="
          editor.chain().focus().toggleHeading({ level: 3 }).run() &&
            changeDisplayText(3)
        "
      >
        {{ textItems.h3 }}
      </button>
      <button
        :class="{
          'paragraph-button': true,
          'is-active': editor.isActive('paragraph'),
        }"
        @click="
          editor.chain().focus().setParagraph().run() && changeDisplayText()
        "
      >
        {{ textItems.paragraph }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  inject: ['editor'],
  setup() {
    const textItems = {
      paragraph: '文字段落',
      h1: '標題 H1',
      h2: '標題 H2',
      h3: '標題 H3',
    };

    const isOpen = ref(false);

    const displayText = ref(textItems.paragraph);

    const toggleParagraphPanel = () => {
      isOpen.value = !isOpen.value;
    };

    const closeParagraphPanel = () => {
      isOpen.value = false;
    };

    const changeDisplayText = (level: number = 0) => {
      switch (level) {
        case 1:
          displayText.value = textItems.h1;
          break;
        case 2:
          displayText.value = textItems.h2;
          break;
        case 3:
          displayText.value = textItems.h3;
          break;
        default:
          displayText.value = textItems.paragraph;
          break;
      }
      closeParagraphPanel();
    };

    document.addEventListener('click', (event: any) => {
      if (
        isOpen.value &&
        !event.path.includes(document.querySelector('.paragraph-toggle-button'))
      ) {
        closeParagraphPanel();
      }
    });

    return {
      isOpen,
      displayText,
      textItems,
      changeDisplayText,
      toggleParagraphPanel,
      closeParagraphPanel,
    };
  },
};
</script>

<style lang="scss" scoped>
$color-blue: #027de5;

.menu {
  .paragraph-toggle-button {
    position: relative;
    ::v-deep(button) {
      width: 80px;
      text-align: left;
      .fa-caret-down {
        float: right;
        height: 20px;
      }
    }
    .paragraph-panel {
      position: absolute;
      display: none;
      background: #fff;
      z-index: 1;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-top: 2px;
      &.is-open {
        display: block;
      }
      .paragraph-button {
        background: none;
        margin-bottom: 2px;
        margin-right: 0;
        &:last-child {
          margin-bottom: 0;
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
