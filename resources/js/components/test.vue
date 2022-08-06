<template>
    <div>
        <span>{{ message }}</span>
    </div>
</template>

<script>
// import { Vue, Component } from 'vue-property-decorator';

// @Component
// export default class extends Vue {

//   message = 'test';

//   mounted(): void {}
// }
export default {
    name: 'Test',
    data() {
        return {
            message: 'test2',
        };
    },
    mounted() {},
};
</script>
