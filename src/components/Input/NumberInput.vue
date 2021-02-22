<template>
  <div class="number-input">
    <input
      class="number-input__input"
      type="number"
      :disabled="disabled || (!decreasable && !increasable)"
      :value="value"
      :step="step"
      :min="min"
      :max="max"
      @input="onInput"
    />
    <button
      class="number-input__button number-input__button--remove"
      type="button"
      tabindex="-1"
      :disabled="disabled || readOnly || !decreasable"
      @click="removeNumber"
    >
      -
    </button>
    <button
      class="number-input__button number-input__button--add"
      type="button"
      tabindex="-1"
      :disabled="disabled || readOnly || !increasable"
      @click="addNumber"
    >
      +
    </button>
    <div class="number-input__sufix-label" v-if="sufixLabel !== ''">
      {{ sufixLabel }}
    </div>
  </div>
</template>

<script>

export default {
  name: "bNumberInput",
  props: {
    value: {
      type: Number,
      default: 0
    },
    error: {
      type: String,
      default:""
    },
    label: {
      type: String,
      default:""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    direction: {
      type: String,
      default: ""
    },
    sufixLabel: {
      type: String,
      default: ""
    },
    themeClass: {
      type: String,
      default: "input-frame"
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    increasable() {
      return (
        this.isNotNumber(this.currentValue) || this.currentValue < this.max
      );
    },
    decreasable() {
      return (
        this.isNotNumber(this.currentValue) || this.currentValue > this.min
      );
    }
  },
  methods: {
    setValue(value) {
      let newValue = value;
      if (this.min <= this.max) {
        newValue = Math.min(this.max, Math.max(this.min, newValue));
        this.currentValue = newValue;
      }
      this.$emit("input", newValue);
    },
    onInput(event) {
      this.setValue(Math.min(this.max, Math.max(this.min, event.target.value)));
    },
    isNotNumber(value) {
      const isNaN = Number.isNaN(value) || window.isNaN(value);
      return isNaN;
    },
    addNumber() {
      if (this.increasable) {
        if (this.isNotNumber(this.currentValue)) {
          this.currentValue = 0;
        }
        this.currentValue = this.currentValue + this.step;
        this.setValue(
          Math.min(this.max, Math.max(this.min, this.currentValue))
        );
      }
    },
    removeNumber() {
      if (this.decreasable) {
        if (this.isNotNumber(this.currentValue)) {
          this.currentValue = 0;
        }
        this.currentValue = this.currentValue - this.step;
        this.setValue(
          Math.min(this.max, Math.max(this.min, this.currentValue))
        );
      }
    }
  }
};
</script>

<style lang="scss">
@import "./_inputs";
@import "../../scss/utils/variables";
.number-input {
  display: flex;
  justify-items: center;

  &__input {
    @include number-input-styles;
    @include light-left-border-styles;
  }

  &__button {
    background-color: $color-white;
    color: $color-grey-600;
    width: 1.5rem;
    padding: 0;
    box-shadow: $box-shadow-light;

    &:focus {
      outline: none;
    }
    &:hover {
      color: $color-white;
      background-color: $color-green-100;
    }
    &:disabled {
      background-color: $color-blue-grey-50;
    }
    &--remove {
      border: 1px solid $color-grey-500;
      border-left: 0;
      border-right: 0;
    }
    &--add {
      @include light-right-border-styles;
    }
  }

  &__sufix-label {
    margin-left: 5px;
    align-self: center;
    font-size: 14px;
  }
}
</style>
