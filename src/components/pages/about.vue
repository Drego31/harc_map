<template>
  <t-page :title="ROUTES.about.label" class="f-text-center">
    <div>O aplikacji</div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus molestie condimentum. Morbi dignissim
      purus blandit tortor lobortis, in laoreet turpis iaculis. Ut id eleifend metus. Aliquam sollicitudin vulputate
      nibh, quis varius est accumsan at. Sed pharetra sapien auctor euismod convallis. Duis pretium eros interdum,
      feugiat dolor ac, ultrices ipsum. Fusce efficitur ligula non ultricies scelerisque.
    </p>
    <p>
      Nulla dapibus lorem ac hendrerit ullamcorper. Nullam vestibulum nibh et nunc ullamcorper, a blandit turpis porta.
      Nulla ex est, facilisis vitae mollis in, blandit nec sapien. Aliquam gravida vulputate lacus, nec fermentum
      tellus. Nam bibendum nisl tristique tincidunt dapibus. Integer quis quam a dui accumsan consequat. Aenean odio
      augue, ornare sit amet diam at, sollicitudin vulputate nibh.
    </p>
    <div>
      Dominik Betka - Pomysłodawca i programista front-end
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';

export default {
  name: 'p-about',
  components: {
    TPage,
  },
};
</script>
