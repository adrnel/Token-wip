export default Ember.Component.extend({
    actions: {
        show() {
            //alert('Header Clicked 2');
             this.toggleProperty('active');
        }
    }
});
