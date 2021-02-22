<template>
  <renderless-tab
    :tabs="options"
    @selectedTabItem="(selctedTabData) => $emit('tab', selctedTabData)"
  >
    <template v-slot="{ tabs, openTab }">
      <slot name="tab" :tabsData="tabs" :activeTab="activeTab" :openTab="openTab">
        <div class="tab">
          <ul class="tab__items">
            <li class="tab__item" v-for="(tab, index) in tabs" :key="tab">
              <a
                :class="[activeTab === index ? 'tab__link--active' : '', 'tab__link']"
                href="#"
                @click="openTab(tab, index)"
              >
                <slot name="tab-item" :option="tab" :itemIndex="index">
                  <span
                    v-if="showIcon"
                    :class="[index === 0 ? 'fas fa-bars' : 'fas fa-history', 'tab__icon']"
                  ></span>
                  {{ tab }}
                </slot>
              </a>
            </li>
          </ul>
        </div>
      </slot>
    </template>
  </renderless-tab>
</template>

<script>
  import RenderlessTab from './RenderlessTab.vue';

  export default {
    components: { RenderlessTab },
    props: {
      options: {
        type: Array,
        default: () => []
      },
      activeTab: {
        type: Number,
        default: 0
      },
      showIcon: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./tab.scss";
</style>