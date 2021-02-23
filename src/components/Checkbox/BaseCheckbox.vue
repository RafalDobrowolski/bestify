<template>
  <label v-if="label" class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :disabled="disabled"
      :value="value"
      :checked="value"
      @change="onInput"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "bCheckBox",
  props: {
    value: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    label: {
      type: String,
      default: "check box"
    }
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/utils/variables";
.checkbox {
  display: inline-flex;
  align-items: center;
  outline: none;
  cursor: pointer;

  &__input {
    @include rem(margin-right, 10px);
  }
}
</style>