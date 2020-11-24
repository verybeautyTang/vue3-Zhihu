<template>
  <li :class="{'isDisable':isCheck}"><a class="dropdown-item" href="#"><slot></slot></a></li>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    isCheck: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
    };
  }
})
</script>

<style>
.isDisable {
  pointer-events: none;
}
</style>
