<template>
  <div class="highlight-toggle-button">
    <button @click="togglePanel">
      <FontAwesomeIcon icon="brush" />
    </button>
    <div
      :class="{
        'highlight-panel': true,
        'is-open': isOpen,
      }"
    >
      <button
        :class="{
          'unset-highlight-button': true,
        }"
        @click="editor.chain().focus().unsetHighlight().run() && closePanel()"
      >
        <FontAwesomeIcon icon="eraser" /> 移除
      </button>
      <input
        :class="{
          'unset-highlight-button': true,
        }"
        type="color"
        @input="editor.chain().focus().setHighlight($event.target.value).run()"
        :value="editor.getAttributes('textStyle').backgroundColor"
      />
      <button
        v-for="color in colors"
        :class="{
          'highlight-button': true,
          'is-active': editor?.isActive('textStyle', {
            backgroundColor: color.color,
          }),
          'has-border': color.hasBorder,
          'has-white-tick': color.hasWhiteTick,
        }"
        :style="{
          'background-color': color.color,
        }"
        @click="
          editor.chain().focus().setHighlight(color.color).run() && closePanel()
        "
      >
        <FontAwesomeIcon
          v-if="editor?.isActive('textStyle', { backgroundColor: color.color })"
          icon="check"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, ref } from 'vue';

export default {
  inject: ['editor'],
  setup() {
    const editor: any = inject('editor');

    const isOpen = ref(false);

    const colors = [
      {
        color: '#000000',
        hasWhiteTick: true,
        text: '黑色',
      },
      {
        color: '#333333',
        hasWhiteTick: true,
        text: '深灰色',
      },
      {
        color: '#666666',
        hasWhiteTick: true,
        text: '���色',
      },
      {
        color: '#999999',
        text: '淺灰色',
      },
      {
        color: '#CCCCCC',
        text: '亮灰色',
      },
      {
        color: '#FFFFFF',
        hasBorder: true,
        text: '白色',
      },
      {
        color: '#ff0000',
        text: '紅色',
      },
      {
        color: '#00ff00',
        text: '綠色',
      },
      {
        color: '#0000ff',
        hasWhiteTick: true,
        text: '藍色',
      },
      {
        color: '#ffff00',
        text: '黃色',
      },
      {
        color: '#ff00ff',
        text: '紫色',
      },
      {
        color: '#00ffff',
        text: '青色',
      },
    ];

    const closePanel = () => {
      isOpen.value = false;
    };

    const togglePanel = () => {
      isOpen.value = !isOpen.value;
    };

    document.addEventListener('click', (event: any) => {
      if (
        isOpen.value &&
        !event.path.includes(document.querySelector('.highlight-toggle-button'))
      ) {
        closePanel();
      }
    });

    return {
      colors,
      togglePanel,
      closePanel,
      isOpen,
      editor,
    };
  },
};
</script>

<style lang="scss" scoped>
$color-blue: #027de5;

.menu {
  .highlight-toggle-button {
    position: relative;
    .highlight-panel {
      position: absolute;
      display: none;
      background: #fff;
      z-index: 1;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-top: 2px;
      padding: 5px 0 5px 5px;
      flex-wrap: wrap;
      width: 150px;
      &.is-open {
        display: flex;
      }
      button {
        margin-bottom: 5px;
      }
      .unset-highlight-button,
      .select-highlight-button {
        width: 70px;
        height: 25px;
        cursor: pointer;
      }
      .highlight-button {
        width: 20px;
        height: 20px;
        transition: all 0.3s;
        border: 1px #fff solid;
        &.has-border {
          border: 1px #ccc solid;
        }
        &:hover {
          outline: $color-blue solid 2px;
          box-shadow: inset 0 0 0 1px #fff;
          border: 1px #fff solid;
        }
        &.is-active {
          outline: #000 solid 2px;
          box-shadow: inset 0 0 0 1px #fff;
          border: 1px #fff solid;
          &:hover {
            outline: $color-blue solid 2px;
          }
        }
        svg {
          margin-left: -3px;
          margin-top: 2px;
        }
        &.has-white-tick {
          color: #fff;
        }
      }
    }
  }
}
</style>