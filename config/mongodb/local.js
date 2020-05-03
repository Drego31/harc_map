// Select database
db = db.getSiblingDB('harcmap');

// Create event in "events" collection
db.events.insert({
  'eventId': 'kO6f',
  'eventName': 'HarcEvent',
  'mapZoom': 11,
  'mapLongitude': 18.4735,
  'mapLatitude': 54.4787,
});

// Create example user in "users" collection
db.users.insert({
  'user': 'zhp@harcmap.henouser.pl',
  'userTeam': 'FonzieBoys',
  // Password: HarcMap1
  'password': 'f363cc9abf38511a7efd11554c346d6106bea3156e24f0322cb4659d3871baf1584a348916c43eaeca94e6fa0048d1a35905fa3dfd752c427a1b9993ab120bb9',
  'userEvents': [
    'kO6f',
  ],
  'accountType': 'common',
  'accountIsActive': true,
  'activationKey': null,
  'forgotKey': null,
  'forgotTimestamp': null,
  'accountCreated': Date.now(),
  'collectedPointsIds': [],
});

db.createUser({
  user: 'harc',
  pwd: 'map',
  roles: [{
    role: 'readWrite',
    db: 'harcmap',
  }],
});
