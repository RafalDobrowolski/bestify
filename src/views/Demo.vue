<template>
  <div class="demo">
    <div class="demo__item">
      <div class="demo__item-label">Buttons:</div>
      <b-button :type="primary" @click="onClick">Primary</b-button>
      <b-button :type="secondary" @click="onClick">Secondary</b-button>
    </div>
    <div class="demo__item">
      <div class="demo__item-label">Text Input:</div>
      <b-text-input placeholder="placeholder" v-model="inputValue"/>
      <div class="demo__item-label">Number Input:</div>
      <b-number-input :min="minInputValue" v-model="numberValue"/>
    </div>
    <div class="demo__item">
      <div class="demo__item-label">Check box:</div>
      <b-checkbox v-model="checkBoxValue"/>
    </div>
  </div>
</template>

<script>
  import bNumberInput from "../components/Input/NumberInput";
  import bButton from "../components/Button/BaseButton";
  import bTextInput from "../components/Input/TextInput"
  import bCheckbox from "../components/Checkbox/BaseCheckbox";
  import { TYPE } from "../components/Button/BaseButton.types";

  export default {
    components: { bNumberInput, bButton, bTextInput, bCheckbox },
    data() {
      return {
        numberValue: 1,
        minInputValue: 0,
        inputValue:"",
        checkBoxValue: true
      }
    },
    methods: {
      onClick() {
        alert("clicked me");
      }
    },
    computed: {
      primary() {
        return TYPE.PRIMARY;
      },
      secondary() {
        return TYPE.SECONDARY;
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
      display: flex;
      align-items: center;
      padding: 10px;

      > button {
        margin-right: 10px;
      }
    }

    &__item-label {
      min-width: 200px;
      margin-right: 10px;
    }
  }
</style>