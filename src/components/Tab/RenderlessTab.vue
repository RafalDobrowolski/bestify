<script>
  export default {
    props: {
      tabs: {
        type: Array,
        default: () => []
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
        openTab: this.openTab
      });
    }
  }
</script>