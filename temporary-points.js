/**
 * 0: category for temporary points
 *
 * @returns {({pointLatitude: number, pointCategory: number, pointLongitude: number})[]}
 */

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
          pointExpirationTime: Date.now(),
        },
        {
          pointLatitude: 54.5161,
          pointLongitude: 18.54206,
          pointType: 'temporary',
          pointCategory: 0,
          pointName: 'Opowieść o holokauście',
          pointExpirationTime: Date.now() + 1000 * 60 * 60, // Date + 1h
        },
        {
          pointLatitude: 54.5228,
          pointLongitude: 18.5038,
          pointType: 'temporary',
          pointCategory: 0,
          pointName: 'Rota Przyrzeczenia THH',
          pointExpirationTime: Date.now() + 1000 * 60 * 30, // Date + 0.5h
        },
      ];
    },
  };
