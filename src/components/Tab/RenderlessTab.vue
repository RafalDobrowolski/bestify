<script>
  export default {
    props: {
      tabs: {
        type: Array,
        default: () => []
      },
      showIcon: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      openTab(name, index) {
        this.$emit('selectedTabItem',  { tabName: name, selectedTabIndex: index });
      }
    },
    render() {
      return this.$scopedSlots.default({
        tabs: this.tabs,
        openTab: this.openTab,
        showIcon: this.showIcon
      });
    }
  }
</script>