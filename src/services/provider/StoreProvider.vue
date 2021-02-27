<template>
  <slot />
</template>

<script>
import { provide } from "vue";
export default {
  props: {
    state: {
      value: Object,
      required: true,
    },
  },
  setup(props) {
    provide("state", props.state);
  },
};
</script>
