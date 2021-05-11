/**
 * 0: category for timeout points
 *
 * @returns {({pointLatitude: number, pointCategory: number, pointLongitude: number})[]}
 */

const defaultData = {
  pointType: 'timeout',
  pointCategory: 0,
  pointAppearanceTime: (new Date('2021-03-27T09:00')).getTime(),
  pointExpirationTime: (new Date('2021-03-27T16:00')).getTime(),
};

module.exports =
  {
    timeoutPointsForDatabase: function () {
      const points = [
        {
          pointName: 'Bunkier Dalmierza',
          pointLatitude: 54.468716225802005,
          pointLongitude: 18.550610254676275,
        },
        {
          pointName: 'Skwer im. Tajnego Hufca Harcerzy',
          pointLatitude: 54.51613492812509,
          pointLongitude: 18.54197104016468,
        },
        {
          pointName: 'Tablica upamiętniająca Lucjana Cylkowskiego',
          pointLatitude: 54.51762815143026,
          pointLongitude: 18.542259173087007,
        },
        {
          pointName: 'Schron przeciwlotniczy (ul. Chrzanowskiego)',
          pointLatitude: 54.528974931751335,
          pointLongitude: 18.542422998795004,
        },
        {
          pointName: 'Obelisk AK',
          pointLatitude: 54.51558438681551,
          pointLongitude: 18.543765566744007,
        },
        {
          pointName: 'Pomnik Roberta Baden-Powella',
          pointLatitude: 54.50230341843519,
          pointLongitude: 18.557973120087617,
        },
        {
          pointName: 'Schron przeciwlotniczy (ul. Morska)',
          pointLatitude: 54.53374631919417,
          pointLongitude: 18.484824984888515,
        },
        {
          pointName: 'Pomnik Alfreda Dyducha',
          pointLatitude: 54.55148017176867,
          pointLongitude: 18.50615260744191,
        },
        {
          pointName: 'Pomnik Rozstrzelanych Harcerzy',
          pointLatitude: 54.5520957142546,
          pointLongitude: 18.508919801436623,
        },
        {
          pointName: 'Tajne informacje od jeńca',
          pointLatitude: 54.506007176534936,
          pointLongitude: 18.554254982579444,
          pointAppearanceTime: (new Date('2021-03-27T10:00')).getTime(),
          pointExpirationTime: (new Date('2021-03-27T13:00')).getTime(),
        },
      ];
      return points.map(point => ({
        ...defaultData,
        ...point,
      }));
    },
  };
