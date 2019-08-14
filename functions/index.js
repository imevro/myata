// https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nanoid = require('nanoid/generate');
const util = require('util');

const nanoidAlphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const app = admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://myata24com.firebaseio.com',
});

const firestore = app.firestore();

const initialState = {
  balance: 300,
  cashback: 3,
  friends: [],
  notifications: {
    invoice: true,
    new_event_in_favorited_place: true,
    new_place: true,
    new_place_in_my_town: true,
  },
  visits: [],
};

exports.onUserCreate = functions.auth.user().onCreate(user => {
  const userData = user.toJSON();
  const phoneNumber = userData.phoneNumber.replace(/\+/, '');
  const data = {
    referralId: nanoid(nanoidAlphabet, 10),
    ...initialState,
  };
  const options = {};

  return firestore
    .collection('users')
    .doc(phoneNumber)
    .set(data, options)
    .then(() => console.info(`document ${phoneNumber} created`))
    .catch(err => console.error(`document ${phoneNumber} errored with ${err}`));
});

exports.onPosterWebhook = functions.https.onRequest((req, res) => {
  console.log(util.inspect(req.body));

  return res.sendStatus(200);
});

// function listAllUsers(req, res) {
//   admin
//     .auth()
//     .listUsers(1000)
//     .then(listUsersResult => {
//       const users = listUsersResult.users.map(user => user.toJSON());

//       return res.send(users);
//     })
//     .catch(error => {
//       console.log('Error listing users:', error);
//     });
// }
// exports.listAllUsers = functions.https.onRequest(listAllUsers);