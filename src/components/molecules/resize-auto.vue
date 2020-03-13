<script>
export default {
  name: 'm-resize-auto',
  methods: {
    resize (event) {
      event.target.style.height = 'auto';
      event.target.style.height = `${event.target.scrollHeight + 4}px`;
    },
  },
  mounted () {
    this.$nextTick(() => {
      this.$el.setAttribute(
        'style',
        'height',
        `${this.$el.scrollHeight + 4}px`,
      );
    });
  },
  render () {
    return this.$scopedSlots.default({
      resize: this.resize,
    });
  },
};
</script>
