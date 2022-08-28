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
          'unset-color-button': true,
        }"
        @click="editor.chain().focus().unsetHighlight().run() && closePanel()"
      >
        <FontAwesomeIcon icon="eraser" /> 移除
      </button>
      <input
        :class="{
          'select-color-button': true,
        }"
        type="color"
        @input="editor.chain().focus().setHighlight($event.target.value).run()"
        :value="editor.getAttributes('textStyle').backgroundColor ?? '#000000'"
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
        color: '#444444',
        hasWhiteTick: true,
        text: '深灰色',
      },
      {
        color: '#777777',
        hasWhiteTick: true,
        text: '灰色',
      },
      {
        color: '#AAAAAA',
        text: '淺灰色',
      },
      {
        color: '#FFFFFF',
        hasBorder: true,
        text: '白色',
      },
      {
        color: '#C42553',
        text: '深紅色',
      },
      {
        color: '#E18929',
        text: '深橘色',
      },
      {
        color: '#7BA345',
        hasWhiteTick: true,
        text: '深綠色',
      },
      {
        color: '#156EA6',
        text: '深藍色',
      },
      {
        color: '#5B297F',
        text: '深紫色',
      },
      {
        color: '#C66792',
        text: '紅色',
      },
      {
        color: '#D0A06F',
        text: '橘色',
      },
      {
        color: '#8ca866',
        hasWhiteTick: true,
        text: '綠色',
      },
      {
        color: '#469DC1',
        text: '藍色',
      },
      {
        color: '#8469A1',
        text: '紫色',
      },
      {
        color: '#D17CAA',
        text: '粉紅色',
      },
      {
        color: '#F4C8A4',
        text: '粉橘色',
      },
      {
        color: '#a0b089',
        hasWhiteTick: true,
        text: '粉綠色',
      },
      {
        color: '#5CB7CC',
        text: '粉藍色',
      },
      {
        color: '#B4A3CE',
        text: '粉紫色',
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
      width: 130px;
      &.is-open {
        display: flex;
      }
      button {
        margin-bottom: 5px;
      }
      .unset-color-button,
      .select-color-button {
        height: 25px;
        cursor: pointer;
      }
      .unset-color-button {
        width: 60px;
      }
      .select-color-button {
        width: 55px;
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
