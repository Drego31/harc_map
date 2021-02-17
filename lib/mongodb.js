/**
 * @module Database module
 */
const mongodb = require('mongodb');
const utils = require('./utils');
const ValidateCodes = require('./validateCodes');

const ENV_DEVELOPMENT = utils.envIsDevelopment();
const systemConfig = utils.getSystemConfig();
const dbConfig = systemConfig[ENV_DEVELOPMENT ? 'database_local' : 'database'];
const connectionString = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`;
// connection handler
const MongoClient = mongodb.MongoClient;
let connectionHandler;

/**
 * @description Change all query from database to one format and verify if result is not empty
 * @param resolve {Function}
 * @param reject {Function}
 * @param [returnAsArray] {boolean} - false in default
 * @return {Function}
 * @private
*/
function __queryCallback (resolve, reject, returnAsArray = false) {
  return (error, result) => {
    let unifiedResult = Array.isArray(result) ? result : [result];

    if (returnAsArray && unifiedResult.length === 1 && unifiedResult[0] === null) {
      unifiedResult = [];
    } else if (!returnAsArray) {
      unifiedResult = unifiedResult[0];
    }

    if (error) {
      reject(ValidateCodes.DATABASE_QUERY_ERROR);
    } else {
      resolve(unifiedResult);
    }
  };

}

/**
 * @description Function connecting and reusing connections to database
 * @returns {Promise}
 * @private
 */
function __connect () {
  return new Promise((resolve, reject) => {
    if (connectionHandler) {
      resolve(connectionHandler);
    } else {
      MongoClient.connect(connectionString, { useUnifiedTopology: true })
        .then(clientConnection => {
          connectionHandler = clientConnection;
          resolve(connectionHandler);
        })
        .catch(reason => {
          console.error(reason);
          // reject error code
          reject(ValidateCodes.DATABASE_CONNECTION_ERROR);
        });
    }
  });
}

/**
 * @description Wrapper and template for database operations
 * @param collectionName {string} - name of collection we are operating
 * @return {Promise}
 * @private
 */
function __getCollection (collectionName) {
  return new Promise((resolve, reject) => {
    __connect()
      .then(connection => {
        const collectionHandler = connection.db(dbConfig.db).collection(collectionName);
        resolve(collectionHandler);
      })
      .catch(reject);
  });
}

/**
 * @description Function adding data to collection.
 * Can create multiple objects
 * @param collectionName {string} - name of collection we are operating
 * @param arrayOfQuery {array} - array of adding mongodb documents
 * @return {Promise}
 * @public
 */
function create (collectionName, arrayOfQuery) {
  return new Promise((resolve, reject) => {
    __getCollection(collectionName)
      .then(collection => {
        collection.insertMany(arrayOfQuery, __queryCallback(resolve, reject));
      })
      .catch(reject);
  });
}

/**
 * @description Function get data from collection.
 * Can read multiple objects
 * @param collectionName {string} - name of collection we are operating
 * @param query {object} - searching mongodb query
 * @param [configObject] {object} - configuration
 *  toArray - true/false(default)
 * @return {Promise}
 * @public
 */
function read (collectionName, query, configObject = {}) {
  return new Promise((resolve, reject) => {
    __getCollection(collectionName)
      .then(collection => {
        if (configObject.toArray === true) {
          collection.find(query).toArray(__queryCallback(resolve, reject, true));
        } else {
          collection.findOne(query, __queryCallback(resolve, reject));
        }
      })
      .catch(reject);
  });
}

/**
 * @description Function get data from collection.
 * Can read multiple objects
 * @param collectionName {string} - name of collection we are operating
 * @param query {object} - searching mongodb query
 * @param newValue {object} - object with new values
 * @return {Promise}
 * @public
 */
function update (collectionName, query, newValue) {
  return new Promise((resolve, reject) => {
    __getCollection(collectionName)
      .then(collection => {
        collection.updateOne(query, { $set: newValue }, __queryCallback(resolve, reject));
      })
      .catch(reject);
  });
}

/**
 * @description Function get data from collection.
 * @param collectionName {string} - name of collection we are operating
 * @param query {object} - searching mongodb query
 * @return {Promise}
 * @public
 */
function readMany (collectionName, query) {
  return new Promise((resolve, reject) => {
    __getCollection(collectionName)
      .then(collection => {
        collection.find(query).toArray(__queryCallback(resolve, reject, true));
      })
      .catch(reject);
  });
}

/**
 * @description Function delete data from collection.
 * Can read multiple objects
 * @param collectionName {string} - name of collection we are operating
 * @param query {object} - mongodb documents to delete
 * @return {Promise}
 * @public
 */
function remove (collectionName, query) {
  return new Promise((resolve, reject) => {
    __getCollection(collectionName)
      .then(collection => {
        collection.deleteMany(query, __queryCallback(resolve, reject));
      })
      .catch(reject);
  });
}

__connect(() => undefined);

module.exports = {
  create,
  update,
  read,
  readMany,
  remove,
  ObjectId: mongodb.ObjectId,
  connectionString,
};
