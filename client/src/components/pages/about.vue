<template>
  <t-page class="f-text-center">
    <p class="f-text-left">
      <span>
        <strong>HarcMap</strong> {{ $t('page.about.appInfo') }}
      </span>
      <span
        v-if="showMore === false"
        class="f-text-bold f-text-underline"
        @click="showMore = true"
        v-html="$t('general.showMore')"
      />
      <span v-else>
        {{ $t('page.about.more') }}
        <strong>:)</strong>
      </span>
    </p>
    <p class="f-text-bold">{{ $t('page.about.authors') }}</p>
    <div
      v-for="person of creators"
      :key="person.fullName"
      class="f-flex f-pb-1"
    >
      <div v-if="person.photo">
        <img :src="person.photo" :alt="person.fullName" width="64" height="64">
      </div>
      <a-icon
        :name="ICONS.account_circle"
        size="64"
        v-else
      />
      <div class="f-flex-1 f-pt-1 f-pl-1 f-text-left">
        <div class="f-text-bold">{{ person.fullName }}</div>
        <div class="f-text-14">{{ person.responsibilities }}</div>
        <div class="f-text-14 f-flex">
          <template
            v-for="(link, key) of person.links"
          >
            <span v-if="key === 1" :key="key" class="f-pr-1">,</span>
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
import { translator } from 'src/dictionary';

export default {
  name: 'p-about',
  components: {
    TPage,
  },
  data: () => ({
    showMore: false,
    creators: [
      {
        photo: '/img/dbetka.jpeg',
        fullName: 'Dominik Betka',
        responsibilities: translator.t('page.about.leader') + ', ' + translator.t('page.about.fullstack'),
        links: [
          {
            label: 'GitHub',
            path: 'https://github.com/dbetka/',
          },
          {
            label: 'LinkedIn',
            path: 'https://www.linkedin.com/in/dominikbetka/',
          },
        ],
      },
      {
        photo: 'https://i.ibb.co/sj5dcdW/harc.jpg',
        fullName: 'Paweł Bednarczyk',
        responsibilities: translator.t('page.about.frontDev'),
        links: [
          {
            label: 'GitHub',
            path: 'https://github.com/Bedpaw/',
          },
        ],
      },
      {
        photo: 'https://henouser.pl/photo.jpeg',
        fullName: 'Paweł Jurkiewicz',
        responsibilities: translator.t('page.about.backDev'),
        links: [
          {
            label: 'Site',
            path: 'https://henouser.pl/',
          }, {
            label: 'GitLab',
            path: 'https://gitlab.com/henouser',
          },
        ],
      },
      {
        // photo: 'https://media-exp1.licdn.com/dms/image/C4E03AQGHPMB1bAAq7A/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=YRm71P6-8AsosWqGUtSFam-IO1XgJxwhp-jYiPbP5GE',
        fullName: 'Filip Betka',
        responsibilities: translator.t('page.about.backDev'),
        links: [
          {
            label: 'LinkedIn',
            path: 'https://www.linkedin.com/in/filip-betka-6b1b10184/',
          },
        ],
      },
      {
        photo: '',
        fullName: 'Magdalena Granke',
        responsibilities: translator.t('page.about.uxDesigner'),
        links: [
          {
            label: 'LinkedIn',
            path: 'https://www.linkedin.com/in/magdalenagranke/',
          },
        ],
      },
      {
        photo: '',
        fullName: 'Adam Dominik',
        responsibilities: translator.t('page.about.frontDev'),
        links: [],
      },
    ],
  }),
};
</script>
