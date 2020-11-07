const validateCodes = require('../lib/validateCodes');
const { logical } = require('../vendors/logical');

class Permissions {

  admin () { return this.permissions.includes('A'); }
  user () { return this.permissions.includes('U'); }
  other () { return this.permissions.includes('O'); }

  constructor (permissions) {
    this.permissions = permissions;
  }
}

const permissionsList = {
  '/event': {
    'GET': new Permissions('AU'),
    'POST': new Permissions('A'),
    'PUT': new Permissions('A'),
  },
  '/event/point': {
    'GET': new Permissions('AU'),
    'POST': new Permissions('A'),
    'PUT': new Permissions('A'),
  },
  '/event/points': {
    'GET': new Permissions('AU'),
    'POST': new Permissions('A'),
  },
  '/event/point/collect': {
    'POST': new Permissions('U'),
  },
  '/event/point/categories': {
    'GET': new Permissions('AU'),
    'POST': new Permissions('A'),
    'DELETE': new Permissions('A'),
  },
  '/admin/collected/stats': {
    'GET': new Permissions('A'),
  },
};

class PermissionsMiddleware {

  getPermissions () {

    const url = this.request.url.split('?')[0];
    const method = this.request.method;

    if (url in permissionsList) {
      return permissionsList[url][method];
    }

    return null;
  }

  isAuthenticated () {
    return this.request.isAuthenticated();
  }

  isSuperUser () {
    if (logical.isObjectEmpty(this.session)) {
      return false;
    }

    return this.session.accountType === 'admin';
  }

  checkPermissions (permissions) {
    console.log(permissions);
    if (permissions.admin()) {
      if (this.isSuperUser()) return true;
    }

    if (permissions.user()) {
      if (this.isAuthenticated()) return true;
    }

    if (permissions.other()) {
      return true;
    }

    return false;
  }

  validate () {
    const permissions = this.getPermissions();
    if (logical.isUndefined(permissions) ||
        logical.isNull(permissions)) {
      return true;
    }

    return this.checkPermissions(permissions);
  }

  /**
   * @details Save parameters.
   * Session data are saved in `this.session` field.
   * @param request - client request object
   * @param response - client response object
   */

  constructor (request, response) {
    this.request = request;
    this.response = response;
    this.session = {};

    if (this.isAuthenticated()) {
      this.session = request.user;
    }
  }

}

function middlewareCall (request, response, next) {

  const middleware = new PermissionsMiddleware(request, response);
  if (middleware.validate()) {
    next();
    return;
  }

  const responseObject = {
    error: validateCodes.UNAUTHORIZED_ACCESS,
  };

  response.status(200).send(responseObject);
}

module.exports = middlewareCall;
