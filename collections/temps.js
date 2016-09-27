import { Mongo } from 'meteor/mongo';

TempsCollection = new Mongo.Collection('temps');

/*Comandes per controlar la base de dades
TempsCollection.find().count();
Meteor.call('removeAllPosts');
TempsCollection.find().fetch();
TempsCollection.find({},{sort: {temps: -1}});
*/
