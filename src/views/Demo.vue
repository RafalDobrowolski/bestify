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
    <div class="demo__item">
      <div class="demo__item-label">Tab component:</div>
        <div class="demo__tab-container">
          <b-base-tab
            :activeTab="activeTabIndex"
            :options="tabs"
            :showIcon="showIcon"
            @tab="switchTab($event)"
          >
            <!-- <template v-slot:tab-item="{ option }">
              <span class="demo__tab-text">{{ option }}</span>
            </template> -->
          </b-base-tab>
          <component class="demo__tab-component" v-bind:is="activeTabComponent"/>
        </div>
    </div>
  </div>
</template>

<script>
  import bNumberInput from "../components/Input/NumberInput";
  import bButton from "../components/Button/BaseButton";
  import bTextInput from "../components/Input/TextInput"
  import bCheckbox from "../components/Checkbox/BaseCheckbox";
  import bBaseTab from "../components/Tab/BaseTab";
  import First from "../views/First";
  import Second from "../views/Second";
  import Third from "../views/Third";
  import { TYPE } from "../components/Button/BaseButton.types";

  export default {
    components: { bNumberInput, bButton, bTextInput, bCheckbox, bBaseTab, First, Second, Third },
    data() {
      return {
        numberValue: 1,
        minInputValue: 0,
        inputValue:"",
        checkBoxValue: true,
        tabSettings: { selectedTabIndex: 0 },
        tabs: [
          'First',
          'Second',
          'Third'
        ],
        showIcon: true
      }
    },
    methods: {
      onClick() {
        alert("clicked me");
      },
      switchTab(tab) {
        this.tabSettings = tab;
      }
    },
    computed: {
      primary() {
        return TYPE.PRIMARY;
      },
      secondary() {
        return TYPE.SECONDARY;
      },
      activeTabComponent() {
        return this.tabSettings && this.tabs[this.tabSettings.selectedTabIndex];
      },
      activeTabIndex() {
        return this.tabSettings ? this.tabSettings.selectedTabIndex : 0;
      },
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

    &__tab-component {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__tab-container {
      display: flex;
      flex-direction: column;
    }
  }
</style>