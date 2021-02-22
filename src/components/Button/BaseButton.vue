<template>
  <button
    class="b-btn"
    :class="buttonClass"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
  import { TYPE } from "./BaseButton.types";

  export default {
    name: "bButon",
    props: {
      type: {
        type: String,
        default: ""
      }
   },
    computed: {
      buttonClass() {
        return {
          "b-btn__primary": this.type === TYPE.PRIMARY,
          "b-btn__secondary": this.type === TYPE.SECONDARY
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../../src/scss/utils/_variables.scss";

  .b-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid  #dbdbdb;
    border-radius: 4px;
    box-shadow: none;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    padding: .5rem 1rem;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    background-color: #fff;
    color: #363636;

    &:hover {
      text-decoration: none;
    }
    &:focus {
      outline: none;
    }

    &__primary {
      background-color: $color-purple-200;
      color: $color-white;
      border-color: transparent;

      &:hover {
        background-color: $color-purple-400;
      }
    }

    &__secondary {
      background-color: $color-green-100;
      color: $color-white;
      border-color: transparent;

      &:hover {
        background-color: $color-green-200;
      }
    }
}
</style>