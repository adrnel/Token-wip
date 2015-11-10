import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let profile=[
      {
        name:'Jackson Bank',
        modified:'Mar 6 2015',
        requestorID:'48379024884'
      },
      {
        name:'Dunbar Business Society',
        modified:'Sep 14 2015',
        requestorID:'94738950294'
      },
      {
        name:'United Union Bank',
        modified:'Jun 24 2015',
        requestorID:'09382754375'
      },
      {
        name:'Federal Bank',
        modified:'Nov 11 2015',
        requestorID:'40315648265'
      }
    ];
  return profile;
  }
});