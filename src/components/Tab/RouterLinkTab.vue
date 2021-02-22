<template>
  <renderless-tab
    :tabs="options"
    @selectedTabItem="(selectedTabData) => $emit('tab', selectedTabData)"
  >
    <template v-slot="{ tabs, openTab }">
      <slot name="tab">
        <div class="tab">
          <ul class="tab__items">
            <li class="tab__item" v-for="tab in tabs" :key="tab.id">
              <router-link
                :to="{ path: tab.url }"
                :class="[activeTab === tab.id ? 'tab__link--active' : '', 'tab__link']"
                @click="openTab(tab.name, tab.id)"
              >
                <slot name="tab-item" :option="tab.name" :itemIndex="tab.id">
                  <span
                    v-if="showIcon"
                    :class="[tab.id === 0 ? 'fas fa-bars' : 'fas fa-history', 'tab__icon']"
                  ></span>
                  {{ tab.name }}
                </slot>
              </router-link>
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