<template>
  <div class="f-relative f-p-2 f-flex f-flex-col f-height-100">
    <a-icon-close-popup add-class="f-mt-1 f-mr-1"/>
    <div class="a-title f-size-28 f-mt-3">{{ title }}</div>
    <div>{{ description }}</div>
    <div class="f-flex-1"></div>
    <div class="f-mt-3 f-mb-6 f-text-primary f-text-center">
      <a-icon
        :name="icon"
        size="150"
      />
    </div>
    <div class="f-py-2">slider no {{ slidePosition }}</div>
    <div class="f-py-2">poprzedni - następny</div>
  </div>
</template>

<script>
import AIconClosePopup from 'atoms/icon/close-popup';
import AIcon from 'atoms/icon';
export default {
  name: 'm-slide',
  components: { AIcon, AIconClosePopup },
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    slidePosition: { type: [String, Number], required: true },
  },
};
</script>
