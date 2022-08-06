// import Vue from 'vue';
import '@/bootstrap/bootstrap';
// import '@/scss/app.scss';
import EditorSimple from '@/components/editor/editor-simple.vue';
// import Test from '@/components/test.vue';
import Vue from 'vue/dist/vue.js';

const testVue = new Vue({
    el: '.test',
    components: {
        EditorSimple,
        // Test
    },
});
