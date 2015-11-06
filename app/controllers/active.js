import Ember from 'ember';

export default Ember.Controller.extend({
      actions: {
        show() {
            //alert('Header Clicked 2');
             this.toggleProperty('active');
        }
    },
    heading: 'Active'
});