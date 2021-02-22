<template>
  <button
    class="b-btn"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "bButon",
    type: {
      type: String,
      default: ""
    }
  }
</script>

<style lang="scss" scoped>
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
}
</style>