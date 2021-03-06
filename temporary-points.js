/**
 * 0: category for temporary points
 *
 * @returns {({pointLatitude: number, pointCategory: number, pointLongitude: number})[]}
 */

const oneMinute = 1000 * 60;

module.exports =
  {
    temporaryPointsForDatabase: function () {
      return [
        {
          pointLatitude: 54.50606,
          pointLongitude: 18.55436,
          pointType: 'timeout',
          pointCategory: 0,
          pointName: 'Tajemnice jeńca',
          pointAppearanceTime: Date.now() - oneMinute * 30,
          pointExpirationTime: Date.now() - oneMinute * 15,
        },
        {
          pointLatitude: 54.50606,
          pointLongitude: 18.55436,
          pointType: 'timeout',
          pointCategory: 0,
          pointName: 'Punkt strategiczny',
          pointAppearanceTime: Date.now() - oneMinute * 15,
          pointExpirationTime: Date.now() + oneMinute * 15,
        },
        {
          pointLatitude: 54.5161,
          pointLongitude: 18.54206,
          pointType: 'timeout',
          pointCategory: 0,
          pointName: 'Opowieść o holokauście',
          pointAppearanceTime: Date.now() + oneMinute * 30,
          pointExpirationTime: Date.now() + oneMinute * 60,
        },
        {
          pointLatitude: 54.5228,
          pointLongitude: 18.5038,
          pointType: 'timeout',
          pointCategory: 0,
          pointName: 'Rota Przyrzeczenia THH',
          pointAppearanceTime: Date.now() + oneMinute * 15,
          pointExpirationTime: Date.now() + oneMinute * 30,
        },
      ];
    },
  };
