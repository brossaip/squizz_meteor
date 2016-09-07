import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

if (Meteor.isServer) {
  Meteor.methods({
    getServerTime: function() {
      var _time = (new Date).toTimeString();
      console.log("Temps consultat: " + _time);
      return _time;
    }
  });
}
  
if (Meteor.isClient) {
  Meteor.startup( function () {
    setInterval( function() {
      Meteor.call("getServerTime", function (error, result) {
        Session.set("horaServidor", result);
      });
    }, 400);
  });
}

Template.horaServidor.time = function () {
  return Session.get("HoraServidor");
}