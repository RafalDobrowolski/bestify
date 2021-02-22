<template>
  <div class="input">
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      class="input__text"
      type="text"
      :value="modelValue"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
  export default {
    name: "BInput",
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
  }
</script>

<style lang="scss" scoped>

</style>