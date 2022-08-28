<template>
  <div class="text-align-toggle-button">
    <button ref="textAlignButton" @click="togglePanel">
      <FontAwesomeIcon :icon="displayIcon" />
    </button>
    <div
      :class="{
        'text-align-panel': true,
        'is-open': isOpen,
      }"
    >
      <button
        ref="textAlignLeftButton"
        :class="{
          'text-align-button': true,
          'is-active': editor.isActive({ textAlign: 'left' }),
        }"
        @click="
          editor.chain().focus().setTextAlign('left').run() && closePanel()
        "
      >
        <FontAwesomeIcon :icon="iconItems.left" />
      </button>
      <button
        ref="textAlignCenterButton"
        :class="{
          'text-align-button': true,
          'is-active': editor.isActive({ textAlign: 'center' }),
        }"
        @click="
          editor.chain().focus().setTextAlign('center').run() && closePanel()
        "
      >
        <FontAwesomeIcon :icon="iconItems.center" />
      </button>
      <button
        ref="textAlignRightButton"
        :class="{
          'text-align-button': true,
          'is-active': editor.isActive({ textAlign: 'right' }),
        }"
        @click="
          editor.chain().focus().setTextAlign('right').run() && closePanel()
        "
      >
        <FontAwesomeIcon :icon="iconItems.right" />
      </button>
      <button
        ref="textAlignClearButton"
        :class="{
          'text-align-button': true,
        }"
        @click="editor.chain().focus().unsetTextAlign().run() && closePanel()"
      >
        <FontAwesomeIcon :icon="iconItems.remove" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, inject, onMounted, ref } from 'vue';
import tippy from 'tippy.js';

export default {
  setup() {
    const iconItems = {
      left: 'align-left',
      center: 'align-center',
      right: 'align-right',
      remove: 'ban',
    };
    const textAlignButton = ref(null);
    const textAlignLeftButton = ref(null);
    const textAlignCenterButton = ref(null);
    const textAlignRightButton = ref(null);
    const textAlignClearButton = ref(null);

    onMounted(() => {
      tippy(textAlignButton.value, {
        content: '文字對齊',
        theme: 'tooltip',
      });
      tippy(textAlignLeftButton.value, {
        content: '文字置左對齊',
        theme: 'tooltip',
      });
      tippy(textAlignCenterButton.value, {
        content: '文字置中對齊',
        theme: 'tooltip',
      });
      tippy(textAlignRightButton.value, {
        content: '文字置右對齊',
        theme: 'tooltip',
      });
      tippy(textAlignClearButton.value, {
        content: '清除文字對齊',
        theme: 'tooltip',
      });
    });

    const editor: any = inject('editor');

    const isOpen = ref(false);

    const togglePanel = () => {
      isOpen.value = !isOpen.value;
    };

    const closePanel = () => {
      isOpen.value = false;
    };

    const displayIcon = computed(() => {
      let icon: string = iconItems.left;

      if (editor.value.isActive({ textAlign: 'left' })) {
        icon = iconItems.left;
      }

      if (editor.value.isActive({ textAlign: 'center' })) {
        icon = iconItems.center;
      }

      if (editor.value.isActive({ textAlign: 'right' })) {
        icon = iconItems.right;
      }

      return icon;
    });

    document.addEventListener('click', (event: any) => {
      if (
        isOpen.value &&
        !event.path.includes(
          document.querySelector('.text-align-toggle-button'),
        )
      ) {
        closePanel();
      }
    });

    return {
      editor,
      isOpen,
      displayIcon,
      iconItems,
      textAlignButton,
      textAlignLeftButton,
      textAlignCenterButton,
      textAlignRightButton,
      textAlignClearButton,
      closePanel,
      togglePanel,
    };
  },
};
</script>

<style lang="scss" scoped>
$color-blue: #027de5;

.menu {
  .text-align-toggle-button {
    position: relative;
    .text-align-panel {
      position: absolute;
      display: none;
      background: #fff;
      z-index: 1;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-top: 2px;
      padding: 5px;
      &.is-open {
        display: flex;
      }
      .text-align-button {
        //background: none;
        //margin-bottom: 2px;
        //margin-right: 0;
        &:last-child {
          margin-right: 0;
        }
        //&.is-active {
        //  background: $color-blue;
        //  color: #fff;
        //}
      }
    }
  }
}
</style>
