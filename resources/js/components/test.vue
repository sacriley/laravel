<template>
  <div>
    <span>{{ message }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const message = ref('test2');
</script>
