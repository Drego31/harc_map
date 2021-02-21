<template>
  <t-page class="f-text-center">
    <o-admin-collected-points v-if="checkIsAdmin()"/>
    <o-collected-points v-else/>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OCollectedPoints from 'organisms/collected-points';
import OAdminCollectedPoints from 'organisms/admin/collected-points';

export default {
  name: 'p-collected-points',
  components: {
    OAdminCollectedPoints,
    OCollectedPoints,
    TPage,
  },
};
</script>
