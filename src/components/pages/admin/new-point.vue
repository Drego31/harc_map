<template>
  <t-point-form
    :on-save="createNewPoint"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import TPointForm from 'templates/point-form';

export default {
  name: 'p-new-point',
  components: {
    TPointForm,
  },
  computed: {
    ...mapGetters('event', [
      'eventId',
    ]),
  },
  methods: {
    createNewPoint (point) {
      return this.$store.dispatch('event/addPoint', {
        point,
        eventId: this.eventId,
      });
    },
  },
};
</script>
