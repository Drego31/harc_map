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
          pointType: 'temporary',
          pointCategory: 0,
          pointName: 'Tajemnice jeńca',
          pointStartingTime: Date.now(),
          pointExpirationTime: Date.now() + oneMinute * 15,
        },
        {
          pointLatitude: 54.5161,
          pointLongitude: 18.54206,
          pointType: 'temporary',
          pointCategory: 0,
          pointName: 'Opowieść o holokauście',
          pointStartingTime: Date.now() + oneMinute * 30,
          pointExpirationTime: Date.now() + oneMinute * 60, // Date + 1h
        },
        {
          pointLatitude: 54.5228,
          pointLongitude: 18.5038,
          pointType: 'temporary',
          pointCategory: 0,
          pointName: 'Rota Przyrzeczenia THH',
          pointStartingTime: Date.now() + oneMinute * 15, // Date + 0.5h
          pointExpirationTime: Date.now() + oneMinute * 30, // Date + 0.5h
        },
      ];
    },
  };
