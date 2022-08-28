<template>
  <div class="table-toggle-button">
    <button @click="toggleInsertPanel">
      <FontAwesomeIcon icon="table" />
    </button>
    <div
      :class="{
        'table-panel': true,
        'is-open': isOpenInsertPanel,
      }"
    >
      <button
        v-for="count in 100"
        :class="{
          'table-cell-button': true,
        }"
        @click="insertTable(count)"
      ></button>
    </div>
    <BubbleMenu
      :shouldShow="shouldShow"
      :class="{ 'table-bubble-panel': true }"
      :editor="editor"
      pluginKey="table"
    >
      <button @click="toggleColumnPanel">
        <FontAwesomeIcon icon="grip-lines-vertical" />
      </button>
      <!--      <button>向左插入一欄</button>-->
      <!--      <button>向右插入一欄</button>-->
      <!--      <button>刪除此欄</button>-->
      <div
        :class="{
          'column-panel': true,
          'is-open': isOpenColumnPanel,
        }"
      >
        <button
          :class="{
            'menu-item-button': true,
          }"
        >
          向左插入一欄
        </button>
      </div>

      <button>
        <FontAwesomeIcon icon="grip-lines" />
      </button>
      <!--      <button>向上插入一列</button>-->
      <!--      <button>向下插入一列</button>-->
      <!--      <button>刪除此列</button>-->

      <button>
        <FontAwesomeIcon icon="columns" />
      </button>
      <!--      <button>啟閉標題欄</button>-->
      <!--      <button>啟閉標題列</button>-->
      <!--      <button>啟閉儲存格標題</button>-->

      <button>
        <!--        合併儲存格-->
        <FontAwesomeIcon icon="border-none" />
      </button>
      <button>
        <!--        分割儲存格-->
        <FontAwesomeIcon icon="border-all" />
      </button>
    </BubbleMenu>
  </div>
</template>

<script lang="ts">
import { inject, ref } from 'vue';
import { BubbleMenu } from '@tiptap/vue-2';

export default {
  components: {
    BubbleMenu,
  },
  inject: ['editor'],
  setup() {
    const editor: any = inject('editor');

    const isOpenInsertPanel = ref(false);
    const isOpenColumnPanel = ref(false);
    const isOpenRowPanel = ref(false);
    const isOpenHeadPanel = ref(false);

    const closePanel = () => {
      isOpenInsertPanel.value = false;
    };

    const toggleInsertPanel = () => {
      isOpenInsertPanel.value = !isOpenInsertPanel.value;
    };

    const toggleColumnPanel = () => {
      isOpenColumnPanel.value = !isOpenColumnPanel.value;
    };

    const shouldShow = (arg) => {
      const isActive = arg.editor.isActive('table');
      return isActive;
    };

    const insertTable = (count) => {
      const rows = count / 10;
      const cols = count % 10;

      editor.value
        .chain()
        .focus()
        .insertTable({ rows, cols, withHeaderRow: true })
        .run();
    };

    document.addEventListener('click', (event: any) => {
      if (
        isOpenInsertPanel.value &&
        !event.path.includes(document.querySelector('.table-toggle-button'))
      ) {
        closePanel();
      }
    });

    return {
      toggleInsertPanel,
      toggleColumnPanel,
      closePanel,
      shouldShow,
      insertTable,
      isOpenInsertPanel,
      isOpenHeadPanel,
      isOpenColumnPanel,
      isOpenRowPanel,
      editor,
    };
  },
};
</script>

<style lang="scss">
$color-blue: #027de5;

.menu {
  .table-toggle-button {
    position: relative;
    .table-panel {
      position: absolute;
      display: none;
      background: #fff;
      z-index: 1;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-top: 2px;
      padding: 5px 0 5px 5px;
      flex-wrap: wrap;
      width: 143px;
      &.is-open {
        display: flex;
      }
      .table-cell-button {
        width: 12px;
        height: 12px;
        padding: 0;
        transition: all 0.3s;
        border: 2px #ddd solid;
        background: #fff;
        margin: 0 2px 2px 0;
      }
    }
  }
}

.table-bubble-panel {
  background: #f1f1f1;
  padding: 2px 0 2px 2px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 2px rgba(50, 50, 50, 0.1);
  input {
    height: 25px;
    border: 0;
    margin-right: 5px;
    width: 200px;
    &:focus {
      outline: 0;
    }
  }
  button {
    background: #f1f1f1;
    border-radius: 3px;
    width: 25px;
    height: 25px;
    border: 0;
    cursor: pointer;
    margin-right: 5px;
    transition: background 0.2s;
    &:hover {
      background: #ddd;
    }
  }
  .column-panel {
    position: absolute;
    display: none;
    &.is-open {
      display: block;
    }
  }
}

.ProseMirror {
  table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;

    td,
    th {
      min-width: 1em;
      border: 2px solid #ced4da;
      padding: 3px 5px;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: #f1f3f5;
    }

    .selectedCell:after {
      z-index: 2;
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(200, 200, 255, 0.4);
      pointer-events: none;
    }

    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: -2px;
      width: 4px;
      background-color: #adf;
      pointer-events: none;
    }

    p {
      margin: 0;
    }
  }
}

.tableWrapper {
  padding: 1rem 0;
  overflow-x: auto;
}

.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}
</style>
