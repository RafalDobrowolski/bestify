<template>
  <input
    v-bind="$attrs"
    :placeholder="placeholder"
    class="text-input"
    type="text"
    :value="modelValue"
    :disabled="disabled"
    @input="onInput"
  />
</template>

<script>
  export default {
    name: "BTextInput",
    props: {
      placeholder: {
        type: String,
        default:""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onInput(event) {
        this.$emit("input", event.target.value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./_inputs";
  .text-input {
    @include input-styles;
    @include light-border-styles;
  }
</style>