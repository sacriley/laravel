<template>
  <div>
    <span>{{ message }}</span>
    <HtmlEditorSimple />
  </div>
</template>

<script>
import HtmlEditorSimple from './html-editors/html-editor-simple.js';
// import { Vue, Component } from 'vue-property-decorator';

// @Component
// export default class extends Vue {

//   message = 'test';

//   mounted(): void {}
// }
export default {
  components: {
    HtmlEditorSimple
  },
  name: 'Test',
  data() {
    return {
      message: 'test2',
    };
  },
  mounted() {},
};
</script>
