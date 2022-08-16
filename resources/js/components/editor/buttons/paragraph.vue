<template>
  <div class="paragraph-toggle-button">
    <button
      :class="{
        'toggle-button': true,
        'fade-out': displayText === textItems.none,
      }"
      @click="togglePanel"
    >
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
            closePanel()
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
            closePanel()
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
            closePanel()
        "
      >
        {{ textItems.h3 }}
      </button>
      <button
        :class="{
          'paragraph-button': true,
          'is-active': editor.isActive('paragraph'),
        }"
        @click="editor.chain().focus().setParagraph().run() && closePanel()"
      >
        {{ textItems.paragraph }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, inject } from 'vue';

export default {
  setup() {
    const textItems = {
      paragraph: '文字段落',
      h1: '標題 H1',
      h2: '標題 H2',
      h3: '標題 H3',
      none: '多個段落',
    };

    const editor: any = inject('editor');

    const isOpen = ref(false);

    const displayText = computed(() => {
      let text: string;

      if (editor.value.isActive('paragraph')) {
        text = textItems.paragraph;
      }

      if (editor.value.isActive('heading', { level: 1 })) {
        text = textItems.h1;
      }

      if (editor.value.isActive('heading', { level: 2 })) {
        text = textItems.h2;
      }

      if (editor.value.isActive('heading', { level: 3 })) {
        text = textItems.h3;
      }

      if (text === undefined) {
        text = textItems.none;
      }

      return text;
    });

    const togglePanel = () => {
      isOpen.value = !isOpen.value;
    };

    const closePanel = () => {
      isOpen.value = false;
    };

    document.addEventListener('click', (event: any) => {
      if (
        isOpen.value &&
        !event.path.includes(document.querySelector('.paragraph-toggle-button'))
      ) {
        closePanel();
      }
    });

    return {
      editor,
      isOpen,
      displayText,
      textItems,
      closePanel,
      togglePanel,
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
    .toggle-button {
      &.fade-out {
        color: #999;
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
