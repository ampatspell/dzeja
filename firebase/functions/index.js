const functions = require('firebase-functions');
const admin = require('firebase-admin');
const normalizeConfig = require('./src/config');

admin.initializeApp();

const region = functions.region('europe-west2');
const config = normalizeConfig(functions.config());

let error = error => ({ status: 'error', error });

const withValidatedAdmin = (context, cb) => {
  if(!context.auth) {
    return error('not signed in');
  }
  if(config.users.admin !== context.auth.uid) {
    return error(`${context.auth.uid} is not admin`);
  }
  return cb();
}

module.exports.callable_user_setRole = region.https.onCall((data, context) => {
  return withValidatedAdmin(context, async () => {

    if(!data.uid) {
      return error('data.uid is required');
    }

    if(!data.role) {
      data.role = null;
    }

    let auth = admin.auth();
    try {
      await auth.setCustomUserClaims(data.uid, {
        role: data.role
      });
    } catch(err) {
      return error(`${err.message} ${err.code}`);
    }

    return {
      status: 'success',
      uid: data.uid,
      role: data.role
    };
  });
});

module.exports.callable_user_getRole = region.https.onCall((data, context) => {
  return withValidatedAdmin(context, async () => {

    if(!data.uid) {
      return error('data.uid is required');
    }

    let auth = admin.auth();
    let user;
    try {
      user = await auth.getUser(data.uid);
    } catch(err) {
      return error(`${err.message} ${err.code}`);
    }

    let { uid, email, customClaims } = user;

    let role = customClaims && customClaims.role;

    return {
      status: 'success',
      uid,
      email,
      role
    };
  });
});
