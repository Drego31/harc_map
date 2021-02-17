<template>
  <t-page class="f-map">
    <o-map/>
    <m-banner-timer/>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OMap from 'organisms/map';
import MBannerTimer from 'molecules/banner-timer';

export default {
  name: 'p-map',
  components: {
    MBannerTimer,
    OMap,
    TPage,
  },
};
</script>
