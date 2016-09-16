import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
    'getServerTime': function() {
      var _time = (new Date).toTimeString();
      console.log("Temps consultat: " + _time);
      return _time;
    }
  });
});
