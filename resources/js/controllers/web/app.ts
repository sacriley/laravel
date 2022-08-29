import '@/bootstrap/bootstrap';
import EditorSimple from '@/components/editor/editor-simple.vue';
import Vue from 'vue';

const testVue = new Vue({
  el: '.test',
  components: {
    EditorSimple,
  },
  // render: (h) => h(EditorSimple),
});
