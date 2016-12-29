<template>
  <li class="thread-list-item" :class="{active: active}" @click="$emit('switch-thread', thread.id)">
    
  </li>
</template>

<script>
  export default {
    name: 'Thread',
    props: {
      thread: Object,
      active: Boolean
    }
  }
</script>

<style>
  .example {
    color: red;
  }
</style>