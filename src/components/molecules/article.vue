<template>
  <div @click="goToArticle" class="m-article">
    <div class="a-img f-article">
    </div>
    <div class="f-pt-2 f-pb-3 f-px-2">
      <div class="a-title f-dark">
        {{ title }}
      </div>
      <div class="a-text f-dark">
        {{ shortDescription }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-article',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToArticle () {
      this.$router.push('/article/' + this.id);
    },
  },
};
</script>
