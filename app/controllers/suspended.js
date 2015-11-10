import Ember from 'ember';

export default Ember.Controller.extend({
      actions: {
        show() {
             this.toggleProperty('active');
        },
          off() {
             this.set('active', false);
        }
  
    },
    headingName: 'Suspended'
});