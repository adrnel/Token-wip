import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    occupation: DS.attr('string')
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'https://api.example.com'
});

