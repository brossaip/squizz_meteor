import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
    'getServerTime': function() {
      var _time = (new Date).toTimeString();
      console.log("Temps consultat: " + _time);
      //TempsCollection.insert({id: 'Jepid', temps: _time}); La inserció a la Base de dades la farà el client que tindrà el seu identificador
      return _time;
    },
    'removeAllPosts': function() {
      return TempsCollection.remove({});
    }
  });
});

