const ValidateCodes = require('../lib/validator').ValidateCodes;
const validator = require('../lib/validator');

module.exports =
    {
      /**
         * Tests for `/user` endpoint
         */

      _user__post__positive: function () {
        validator.validateUserPostRequest({
          user: 'example@example.com', // email is user name
          password: 'examplePassword1', // 8 characters+, one alphanumeric
          teamName: 'exampleTeamName', // name of team to display.
          eventId: 'XZ3bw1fn44hr', // key assigned to event
        });

        return true;
      },

      _user__post__bad_user: function () {
        try {
          validator.validateUserPostRequest({
            user: '123example.com', // email is user name
            password: 'examplePassword1', // 8 characters+, one alphanumeric
            teamName: 'exampleTeamName', // name of team to display.
            eventId: 'XZ3bw1fn44hr', // key assigned to event
          });
        } catch (exception) {
          if (exception === ValidateCodes.IS_NOT_EMAIL) { return true; }
        }

        return false;
      },

      _user__post__password_without_number: function () {
        try {
          validator.validateUserPostRequest({
            user: 'example@example.com', // email is user name
            password: 'examplePassword', // 8 characters+, one alphanumeric
            teamName: 'exampleTeamName', // name of team to display.
            eventId: 'XZ3bw1fn44hr', // key assigned to event
          });
        } catch (exception) {
          if (exception === ValidateCodes.PASSWORD_HAS_NOT_NUMBER) { return true; }
        }

        return false;
      },

      _user__post__password_too_short: function () {
        try {
          validator.validateUserPostRequest({
            user: 'example@example.com', // email is user name
            password: 'exa1', // 8 characters+, one alphanumeric
            teamName: 'exampleTeamName', // name of team to display.
            eventId: 'XZ3bw1fn44hr', // key assigned to event
          });
        } catch (exception) {
          if (exception === ValidateCodes.PASSWORD_TOO_SHORT) { return true; }
        }

        return false;
      },

      _user__post__teamName_empty: function () {
        try {
          validator.validateUserPostRequest({
            user: 'example@example.com', // email is user name
            password: 'examplePassword1', // 8 characters+, one alphanumeric
            teamName: '',
            eventId: 'XZ3bw1fn44hr', // key assigned to event
          });
        } catch (exception) {
          if (exception === ValidateCodes.TEAM_NAME_IS_EMPTY) { return true; }
        }

        return false;
      },

      _user__post__eventId_empty: function () {
        try {
          validator.validateUserPostRequest({
            user: 'example@example.com', // email is user name
            password: 'examplePassword1', // 8 characters+, one alphanumeric
            teamName: 'exampleTeamName', // name of team to display.
            eventId: '', // key assigned to event
          });
        } catch (exception) {
          if (exception === ValidateCodes.EVENT_ID_IS_EMPTY) { return true; }
        }

        return false;
      },

      /**
         * Tests for `/user/remind` endpoint
         */

      _user_remind__post__positive: function () {
        validator.validateUserRemindPostRequest({
          user: 'example@example.com', // email is user name
        });

        return true;
      },

      _user_remind__post__bad_user: function () {
        try {
          validator.validateUserRemindPostRequest({
            user: '123example.com', // email is user name
          });
        } catch (exception) {
          if (exception === ValidateCodes.IS_NOT_EMAIL) { return true; }
        }

        return false;
      },

      _user_remind__put__positive: function () {
        validator.validateUserRemindPutRequest({
          uniqueCode: '1234', // [0-9]{4}
          password: 'examplePassword1', // 8 characters+, one alpha one numeric
        });

        return true;
      },

      _user_remind__put__password_without_number: function () {
        try {
          validator.validateUserRemindPutRequest({
            password: 'examplePassword', // 8 characters+, one alphanumeric
          });
        } catch (exception) {
          if (exception === ValidateCodes.PASSWORD_HAS_NOT_NUMBER) { return true; }
        }

        return false;
      },

      _user_remind__put__password_too_short: function () {
        try {
          validator.validateUserRemindPutRequest({
            password: 'exa1', // 8 characters+, one alphanumeric
          });
        } catch (exception) {
          if (exception === ValidateCodes.PASSWORD_TOO_SHORT) { return true; }
        }

        return false;
      },

      /**
         * Tests for `/user/login` endpoint
         */

      _user_login__post__positive: function () {
        validator.validateUserLoginPostRequest({
          user: 'example@example.com', // email is user name
          password: 'examplePassword1', // 8 characters+, one alphanumeric
        });

        return true;
      },

      _user_login__post__bad_user: function () {
        try {
          validator.validateUserLoginPostRequest({
            user: '123example.com', // email is user name
            password: 'examplePassword1', // 8 characters+, one alphanumeric
          });
        } catch (exception) {
          if (exception === ValidateCodes.IS_NOT_EMAIL) { return true; }
        }

        return false;
      },

      _user_login__post__password_without_number: function () {
        try {
          validator.validateUserLoginPostRequest({
            user: 'example@example.com', // email is user name
            password: 'examplePassword', // 8 characters+, one alphanumeric
          });
        } catch (exception) {
          if (exception === ValidateCodes.PASSWORD_HAS_NOT_NUMBER) { return true; }
        }

        return false;
      },

      _user_login__post__password_too_short: function () {
        try {
          validator.validateUserLoginPostRequest({
            user: 'example@example.com', // email is user name
            password: 'exa1', // 8 characters+, one alphanumeric
          });
        } catch (exception) {
          if (exception === ValidateCodes.PASSWORD_TOO_SHORT) { return true; }
        }

        return false;
      },

      _user_login__delete__positive: function () {
        validator.validateUserLoginDeleteRequest({
          user: 'example@example.com', // email is user name
        });

        return true;
      },

      _user_login__delete__bad_user: function () {
        try {
          validator.validateUserLoginDeleteRequest({
            user: '123example.com', // email is user name
          });
        } catch (exception) {
          if (exception === ValidateCodes.IS_NOT_EMAIL) { return true; }
        }

        return true;
      },

      /**
         * Tests for `/event` endpoints
         */

      _event__get__positive: function () {
        validator.validateEventGetRequest({
          eventId: 'XZ3bw1fn44hr', // key assigned to event
        });

        return true;
      },

      _event__get__eventId_empty: function () {
        try {
          validator.validateEventGetRequest({
            eventId: '', // key assigned to event
          });
        } catch (exception) {
          if (exception === ValidateCodes.EVENT_ID_IS_EMPTY) { return true; }
        }

        return false;
      },

      _event__post__positive: function () {
        validator.validateEventPostRequest({
          eventId: 'XZ3bw1fn44hr', // key assigned to event
          name: 'eventName', // name of event to display
          mapPosition: { // range from -180 to 180
            longitude: 54.23411,
            latitude: 158.21677,
          },
          mapZoom: 12.5, // range from 2 to 19
          points: [
            {
              pointId: 'XZ3bw1fn44hr', // key assigned to point
              name: 'pointName', // name of point to display
              longitude: 54.23411, // range from -180 to 180
              latitude: 158.21677, // range from -180 to 180
              type: 'permanent', // "permanent"|"timeout"
              value: 6, // ???
            },
          ],
        });

        return true;
      },

      _event__put__positive: function () {
        validator.validateEventPutRequest({
          eventId: 'XZ3bw1fn44hr', // key assigned to event
          name: 'eventName', // name of event to display
          mapPosition: { // range from -180 to 180
            longitude: 54.23411,
            latitude: 158.21677,
          },
          mapZoom: 12.5, // range from 2 to 19
          points: [
            {
              pointId: 'XZ3bw1fn44hr', // key assigned to point
              name: 'pointName', // name of point to display
              longitude: 54.23411, // range from -180 to 180
              latitude: 158.21677, // range from -180 to 180
              type: 'permanent', // "permanent"|"timeout"
              value: 6, // ???
            },
          ],
        });

        return true;
      },

      /**
         * Tests for `/event/collect` endpoints
         */

      _event_collect__put__positive: function () {
        validator.validateEventCollectPutRequest({
          user: 'example@example.com', // email is user name
          eventId: 'XZ3bw1fn44hr', // key assigned to event
          pointId: 'XZ3bw1fn44hr', // key assigned to point
        });

        return true;
      },
    };
