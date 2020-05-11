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
let connection;

/**
 * @description Function connecting and reusing connections to database
 * @param callback {function}
 * @private
 */
function __connect (callback) {
  if (connection) {
    callback(null, connection);
  } else {
    MongoClient.connect(connectionString, { useUnifiedTopology: true }).then(clientConnection => {
      connection = clientConnection;
      callback(null, connection);
    }).catch(error => {
      console.error(error);
      callback(ValidateCodes.DATABASE_CONNECTION_ERROR, connection);
    });
  }
}

/**
 * @description Wrapper and template for database operations
 * @param collectionName {string} - name of collection we are operating
 * @param callback {function} - function that receives collections in the parameter
 * @return {undefined}
 * @private
 */
function __getCollection (collectionName, callback) {
  __connect((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
      const collection = connection.db(dbConfig.db).collection(collectionName);
      if (error) {
        callback(error, null);
      } else {
        callback(null, collection);
      }
    }
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
    __getCollection(collectionName, (errorColl, collection) => {
      if (errorColl) {
        reject(errorColl);
      } else {
        collection.insertMany(arrayOfQuery, (errorQuery, result) => {
          if (errorQuery) {
            reject(errorQuery);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
}

/**
 * @description Function updating data in collection.
 * @param collectionName {string} - name of collection we are operating
 * @param filter {object} - what will be updated
 * @param data {object} - document to save indeed of found document
 * @return {Promise}
 * @public
 */
// function update (collectionName, filter, data) {
//   return new Promise((resolve, reject) => {
//     __getCollection(collectionName, (errorColl, collection) => {
//       if (errorColl) {
//         reject(errorColl);
//       } else {
//         collection.updateOne(filter, data, (errorQuery, result) => {
//           if (errorQuery) {
//             reject(errorQuery);
//           } else {
//             resolve(result);
//           }
//         });
//       }
//     });
//   });
// }

/**
 * @description Function get data from collection.
 * Can read multiple objects
 * @param collectionName {string} - name of collection we are operating
 * @param query {object} - searching mongodb query
 * @param [many] {boolean} - if true, get multiple Documents
 * @return {Promise}
 * @public
 */
function read (collectionName, query, many) {
  return new Promise((resolve, reject) => {
    const queryCallback = (errorQuery, result) => {
      if (errorQuery) {
        reject(errorQuery);
      } else {
        resolve(result);
      }
    };
    __getCollection(collectionName, (errorColl, collection) => {
      if (errorColl) {
        reject(errorColl);
      } else {
        if (many) {
          collection.find(query).toArray(queryCallback);
        } else {
          collection.findOne(query, queryCallback);
        }
      }
    });
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
    const queryCallback = (errorQuery, result) => {
      if (errorQuery) {
        reject(errorQuery);
      } else {
        resolve(result);
      }
    };
    __getCollection(collectionName, (errorColl, collection) => {
      if (errorColl) {
        reject(errorColl);
      } else {
        // if (many) {
        //   collection.update(query).toArray(queryCallback);
        // } else {
        collection.updateOne(query, { $set: newValue }, queryCallback);
        // }
      }
    });
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
    __getCollection(collectionName, (errorColl, collection) => {
      if (errorColl) {
        reject(errorColl);
      } else {
        collection.find(query).toArray((errorQuery, result) => {
          if (errorQuery) {
            reject(errorQuery);
          } else {
            resolve(result);
          }
        });
      }
    });
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
    __getCollection(collectionName, (errorColl, collection) => {
      if (errorColl) {
        reject(errorColl);
      } else {
        collection.deleteMany(query, (errorQuery, result) => {
          if (errorQuery) {
            reject(errorQuery);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
}

module.exports = {
  create,
  update,
  read,
  readMany,
  remove,
  ObjectId: mongodb.ObjectId,
};
