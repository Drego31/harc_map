<template>
  <t-point-form
    :defaultValues="defaultValues"
    :on-save="editPoint"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import TPointForm from 'templates/point-form';

export default {
  name: 'p-edit-point',
  components: {
    TPointForm,
  },
  computed: {
    ...mapGetters('event', [
      'eventId',
    ]),
    defaultValues () {
      const pointId = this.$route.params.pointId;
      const point = Object.assign({}, this.$store.getters['event/getPointById'](pointId));
      delete point.olUid;
      return point;
    },
  },
  methods: {
    editPoint (point) {
      return this.$store.dispatch('event/editPoint', {
        point,
        eventId: this.eventId,
      });
    },
  },
};
</script>
