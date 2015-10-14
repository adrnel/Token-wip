import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pending', { path: '/pending'});
  this.route('active', { path: '/active'});
  this.route('drafts', { path: '/drafts'});
  this.route('suspended', { path: '/suspended'});
});


export default Router;
