<template>
  <t-page :title="ROUTES.about.label" class="f-text-center">
    <div class="f-text-bold">O aplikacji</div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus molestie condimentum. Morbi dignissim
      purus blandit tortor lobortis, in laoreet turpis iaculis. Ut id eleifend metus. Aliquam sollicitudin vulputate
      nibh, quis varius est accumsan at. Sed pharetra sapien auctor euismod convallis. Duis pretium eros interdum,
      feugiat dolor ac, ultrices ipsum. Fusce efficitur ligula non ultricies scelerisque.
    </p>
    <p class="f-text-bold">O twórcach</p>
    <div
      v-for="person of creators"
      :key="person.fullName"
      class="f-flex f-pb-1"
    >
      <div v-if="person.photo"><!--PHOTO--></div>
      <icon-account-circle :size="64" v-else/>
      <div class="f-flex-1 f-pt-1 f-pl-1 f-text-left">
        <div class="f-text-bold">{{ person.fullName }}</div>
        <div class="f-text-14">{{ person.responsibilities }}</div>
        <div class="f-text-14 f-flex">
          <template
            v-for="(link, key) of person.links"
          >
            <span v-if="key === 1" :key="link.path" class="f-pr-1">,</span>
            <a
              :href="link.path"
              :key="link.path"
              class="a-link"
              target="_blank"
            >
              {{ link.label }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </t-page>
</template>

<script>
import TPage from 'templates/page';
import IconAccountCircle from 'icons/AccountCircle';

export default {
  name: 'p-about',
  components: {
    TPage,
    IconAccountCircle,
  },
  data: () => ({
    creators: [
      {
        photo: '',
        fullName: 'Dominik Betka',
        responsibilities: 'Lider, Programista front-end',
        links: [
          {
            label: 'GitHub',
            path: 'https://github.com/Drego31/',
          },
          {
            label: 'LinkedIn',
            path: 'https://www.linkedin.com/in/dominikbetka/',
          },
        ],
      },
      {
        photo: '',
        fullName: 'Paweł Bednarczyk',
        responsibilities: 'Programista front-end',
        links: [],
      },
      {
        photo: '',
        fullName: 'Paweł Jurkiewicz',
        responsibilities: 'Programista back-end',
        links: [],
      },
      {
        photo: '',
        fullName: 'Filip Betka',
        responsibilities: 'Programista back-end',
        links: [],
      },
      {
        photo: '',
        fullName: 'Magdalena Granke',
        responsibilities: 'UX Designer',
        links: [],
      },
    ],
  }),
};
</script>
