<template>
  <div class="demo">
    <div class="demo__item">
      <div>Button:</div>
      <b-button class="test" @click="onClick">Test</b-button>
    </div>
    <div class="demo__item">
      <div>Number Input:</div>
      <b-number-input :min="minInputValue" v-model="numberValue"/>
    </div>
  </div>
</template>

<script>
  import BNumberInput from "../components/Input/NumberInput";
  import BButton from "../components/Button/BaseButton"
  export default {
    components: { BNumberInput, BButton },
    data() {
      return {
        numberValue: 1,
        minInputValue: 0,
      }
    },
    methods: {
      onClick() {
        debugger
      }
    },
  }
</script>

<style lang="scss" scoped>
  .demo{
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    &__item {
      padding: 10px;
    }
  }
</style>