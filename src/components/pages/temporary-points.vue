<template>
  <t-page title="Wydarzenia czasowe">
    <o-temporary-points/>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import OTemporaryPoints from 'organisms/temporary-points';

export const pointDurationTimeMock = 1; // hours
export const temporaryPointsMock = [
  {
    pointId: 'xdXD',
    pointType: 'timeout',
    pointName: 'Konstruowanie bomby',
    pointExpirationTime: new Date(2020, 6, 27, 19, 0, 0), // TODO: Date and time, when point expiration
    pointCollectionTime: undefined,
    pointLongitude: -0.12755,
    pointLatitude: 51.507222,
    pointCategory: 1,
  },
  {
    pointId: 'xdXM',
    pointType: 'timeout',
    pointName: 'Jedzenie nietoperzy',
    pointExpirationTime: new Date(2020, 6, 4, 12, 0, 0), // TODO: Date and time, when point expiration
    pointCollectionTime: undefined,
    pointLongitude: 18.538836,
    pointLatitude: 54.519502,
    pointCategory: 1,
  },
  {
    pointId: 'xdUM',
    pointType: 'timeout',
    pointName: 'Tych malutkich',
    pointExpirationTime: new Date(2020, 4, 27, 19, 30, 0), // TODO: Date and time, when point expiration
    pointCollectionTime: undefined,
    pointLongitude: 18.538836,
    pointLatitude: 54.519502,
    pointCategory: 1,
  },
  {
    pointId: 'xDXM',
    pointType: 'timeout',
    pointName: 'Tych dużych też',
    pointExpirationTime: new Date(2020, 4, 27, 19, 45, 0), // TODO: Date and time, when point expiration
    pointCollectionTime: undefined,
    pointLongitude: 18.538836,
    pointLatitude: 54.519502,
    pointCategory: 1,
  },
];

export default {
  name: 'p-collected-points',
  components: {
    TPage,
    OTemporaryPoints,
  },
};
</script>
