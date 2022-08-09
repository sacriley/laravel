// import Vue from 'vue';
import '@/bootstrap/bootstrap';
// import '@/scss/app.scss';
import EditorSimple from '@/components/editor/editor-simple.vue';
// import Test from '@/components/test.vue';
import Vue from 'vue';

const testVue = new Vue({
  el: '.test',
  components: {
    EditorSimple,
    // Test
  },
  render: (h) => h(EditorSimple),
});
