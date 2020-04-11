
const ValidateCodes = Object.freeze({
  1: 'user field is not email',
  2: 'password is too short',
  3: 'password has not number',
  4: 'userTeam is null or empty',
  5: 'eventId is null or empty',
  6: 'eventName is empty',
  7: 'Map position longitude without range',
  8: 'Map position latitude without range',
  9: 'Map zoom without range',
  10: 'pointId is empty',
  11: 'pointName is empty',
  12: 'Point longitude without range',
  13: 'Point latitude without range',
  14: 'pointType is incorrect',
  15: 'pointValue is empty',
  100: 'Bad JSON format',
  1000: 'Problem with database',
});

// export
module.exports = ValidateCodes;
