export function getPointsByEventIdMock (eventId) {
  return {
    'error': null,
    'eventId': eventId,
    'points': permanentPointsMock.concat(temporaryPointsMock()),
  };
}

const permanentPointsMock = [
  {
    'pointLatitude': 54.5309,
    'pointLongitude': 18.4889,
    'pointCategory': 1,
    'pointId': 'OeNa',
    'pointType': 'permanent',
    'pointName': '',
    'pointAppearanceTime': null,
    'pointExpirationTime': null,
    'pointCollectionTime': null,
  },
  {
    'pointLatitude': 54.5302,
    'pointLongitude': 18.4955,
    'pointCategory': 1,
    'pointId': 'JJSB',
    'pointType': 'permanent',
    'pointName': '',
    'pointAppearanceTime': null,
    'pointExpirationTime': null,
    'pointCollectionTime': null,
  },
  {
    'pointLatitude': 54.527,
    'pointLongitude': 18.4898,
    'pointCategory': 1,
    'pointId': 'IDph',
    'pointType': 'permanent',
    'pointName': '',
    'pointAppearanceTime': null,
    'pointExpirationTime': null,
    'pointCollectionTime': null,
  },
  {
    'pointLatitude': 54.52398,
    'pointLongitude': 18.49104,
    'pointCategory': 2,
    'pointId': 'h0Rx',
    'pointType': 'permanent',
    'pointName': '',
    'pointAppearanceTime': null,
    'pointExpirationTime': null,
    'pointCollectionTime': null,
  },
  {
    'pointLatitude': 54.52761,
    'pointLongitude': 18.4959,
    'pointCategory': 2,
    'pointId': 'ni2V',
    'pointType': 'permanent',
    'pointName': '',
    'pointAppearanceTime': null,
    'pointExpirationTime': null,
    'pointCollectionTime': null,
  },
  {
    'pointLatitude': 54.51898,
    'pointLongitude': 18.51978,
    'pointCategory': 3,
    'pointId': 'eZzP',
    'pointType': 'permanent',
    'pointName': '',
    'pointAppearanceTime': null,
    'pointExpirationTime': null,
    'pointCollectionTime': null,
  },
  {
    'pointLatitude': 54.51802,
    'pointLongitude': 18.52181,
    'pointCategory': 1,
    'pointId': 'IbdI',
    'pointType': 'permanent',
    'pointName': '',
    'pointAppearanceTime': null,
    'pointExpirationTime': null,
    'pointCollectionTime': null,
  },
  {
    'pointLatitude': 54.51601,
    'pointLongitude': 18.51583,
    'pointCategory': 1,
    'pointId': '3HVj',
    'pointType': 'permanent',
    'pointName': '',
    'pointAppearanceTime': null,
    'pointExpirationTime': null,
    'pointCollectionTime': null,
  },
  {
    'pointLatitude': 54.5156,
    'pointLongitude': 18.5122,
    'pointCategory': 2,
    'pointId': 'vf7y',
    'pointType': 'permanent',
    'pointName': '',
    'pointAppearanceTime': null,
    'pointExpirationTime': null,
    'pointCollectionTime': null,
  },
  {
    'pointLatitude': 54.5154,
    'pointLongitude': 18.5073,
    'pointCategory': 2,
    'pointId': 'aKwt',
    'pointType': 'permanent',
    'pointName': '',
    'pointAppearanceTime': null,
    'pointExpirationTime': null,
    'pointCollectionTime': null,
  },

];

const temporaryPointsMock = () => {
  const now = new Date().toLocaleString();
  const twoHoursBefore = new Date();
  const twoHoursAfter = new Date();
  twoHoursBefore.setHours(twoHoursBefore.getHours() - 2).toLocaleString();
  twoHoursAfter.setHours(twoHoursAfter.getHours() + 2).toLocaleString();
  return [
    {
      'pointLatitude': 54.5216,
      'pointLongitude': 18.5393,
      'pointCategory': 0,
      'pointId': 'P50c',
      'pointType': 'temporary',
      'pointName': 'Event 1',
      'pointExpirationTime': now,
      'pointCollectionTime': null,
    },
    {
      'pointLatitude': 54.519,
      'pointLongitude': 18.5486,
      'pointCategory': 0,
      'pointId': 'A1vB',
      'pointType': 'temporary',
      'pointName': 'Event 2',
      'pointExpirationTime': twoHoursBefore,
      'pointCollectionTime': null,
    },
    {
      'pointLatitude': 54.5128,
      'pointLongitude': 18.5074,
      'pointCategory': 0,
      'pointId': 'UQoh',
      'pointType': 'temporary',
      'pointName': 'Event 3',
      'pointExpirationTime': twoHoursAfter,
      'pointCollectionTime': null,
    },
  ];

};
